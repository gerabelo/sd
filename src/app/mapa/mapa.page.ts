import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController, PopoverController, Platform, IonApp, ToastController } from '@ionic/angular';
import { faCompass, faInfoCircle, faChevronCircleLeft, faMapMarker, faPhone, faRecycle, faDesktop, faBars } from '@fortawesome/free-solid-svg-icons';
import { WsPontosService } from '../ws-pontos.service';
import { Pais } from '../pais';
import { NavController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { stringify } from '@angular/core/src/util';
import { logging } from 'protractor';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { map, filter, scan, finalize } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ParseSourceFile } from '@angular/compiler';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})

export class MapaPage implements OnInit {
  public paises: Pais[] = [];
  
  faCompass = faCompass;
  faInfoCircle = faInfoCircle;
  faChevronCircleLeft = faChevronCircleLeft;
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faRecycle = faRecycle;
  faDesktop = faDesktop;
  faBars = faBars;

  mapRef = null;
  
  myMark = null;
  lat: any;
  lng: any;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    public wspontos: WsPontosService,
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private storage: Storage,
    private platform: Platform,
    private router: Router,
    private appCtrl: IonApp,
    private toastController: ToastController,
  ) {
    this.navCtrl = navCtrl
  }

  ngAfterViewInit() {
      this.getLocalData().then((paises) => {
        console.log('local paises: ', paises);

        /** VERIFICANDO SE HÁ DADOS PARA EXIBIÇÃO OFFLINE */
        if (paises == null) {
          this.wspontos.getDataFromApi()
          .subscribe(data => {
            paises = data;
            this.setLocalData(JSON.stringify(paises));
            console.log('paises: '+JSON.stringify(paises));
          })
        } else {
          this.paises = JSON.parse(paises);          
        }      
        /***/

      }).catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.platform.ready().then(() => {    
      this.loadMap();
    })
  }
  
  async loadMap() {
    //faz uso da watchPosition com clearWatch
    const loading = await this.loadingCtrl.create();
    loading.present();

    let watchOptions = {
      timeout : 30000,
      maxAge: 0,
      enableHighAccuracy: true
    };

    var watchID = navigator.geolocation.watchPosition((position) => {
      if ((position as Geoposition).coords != undefined) {
        var geoposition = (position as Geoposition);
        console.log('Latitude: ' + geoposition.coords.latitude + ' Longitude: ' + geoposition.coords.longitude);
      }
      
      this.setLatLng(geoposition.coords.latitude,geoposition.coords.longitude);
      const mapEle: HTMLElement = document.getElementById('map');
      this.mapRef = new google.maps.Map(mapEle, {
        center: {lat: geoposition.coords.latitude, lng: geoposition.coords.longitude},
        zoom: 3
      });

      google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
      
        
      
        if (this.paises.length) {
          this.paises.forEach(pais => {
            console.log("pais: "+JSON.stringify(pais));
              this.addInfoWindow (
                this.mapRef,
                this.addMaker(pais.latlng[0],pais.latlng[1],null,null,false),
                  '<div>'+
                    '<h1 id="pais_name" value="'+pais.name+'">'+pais.name+'</h1>'+
                    '<div id="pais_content">'+
                      pais.capital+'</br>'+
                      // this.geodesicDistance(pais.latlng[0],pais.latlng[1])+' m</br>'+
                    '</div>'+
                  '</div>'
              );
          });
        }      
        this.myMark = this.addMyMaker(this.lat, this.lng,null,"assets/icon/mylocation.png");
      });
      navigator.geolocation.clearWatch(watchID);
    }, null , { enableHighAccuracy: true });
    // navigator.geolocation.clearWatch(watchID);
    loading.dismiss();
  }

  private addInfoWindow(map,marker,contentString: string) {
    var _this = this;
    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infoWindow.open(map,marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        
        document.getElementById('pais_name').addEventListener('click', () => {
          //_this.presentToast(document.getElementById('tap').getAttribute('value'));
          _this.navCtrl.navigateForward('/pais/'+document.getElementById('pais_name').getAttribute('value'));
        },false);
      });
    });
  }

  private addMaker(lat: number, lng: number, lbl: string, ico: string, drag) {
    //https://developers.google.com/maps/documentation/javascript/markers
    //https://developers.google.com/maps/documentation/javascript/distancematrix
    //https://developers.google.com/maps/documentation/javascript/examples/marker-animations
    //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      label: lbl,
      icon: ico,
      animation: google.maps.Animation.DROP,
      draggable: drag
    });
    return marker;
  }

  private addMyMaker(lat: number, lng: number, lbl: string, ico: string) {
    //https://developers.google.com/maps/documentation/javascript/markers
    //https://developers.google.com/maps/documentation/javascript/distancematrix
    //https://developers.google.com/maps/documentation/javascript/examples/marker-animations
    //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      label: lbl,
      icon: ico,
      draggable: true
    });
    return marker;
  }

  private geodesicDistance(lat: number,lng: number) {
    var R = 6371000; // metres
    var φ1 = this.toRad(lat);
    // var φ2 = this.toRad(+this.myLatLng.lat);
    var φ2 = this.toRad(+this.lat);
    // var Δφ = Math.sqrt(Math.pow(this.toRad(+this.myLatLng.lat)-this.toRad(lat),2));
    // var Δλ = Math.sqrt(Math.pow(this.toRad(+this.myLatLng.lng)-this.toRad(lng),2));
    var Δφ = Math.sqrt(Math.pow(this.toRad(+this.lat)-this.toRad(lat),2));
    var Δλ = Math.sqrt(Math.pow(this.toRad(+this.lng)-this.toRad(lng),2));
    
    var a = Math.sin(Δφ/2)*Math.sin(Δφ/2)+Math.cos(φ1)*Math.cos(φ2)*Math.sin(Δλ/2)*Math.sin(Δλ/2);
    var c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = (R * c).toFixed(1);
  
    return new Intl.NumberFormat('pt-br', {minimumFractionDigits: 2}).format(+d);
  }

  public toRad(value: number) {
    return value * Math.PI / 180;
  }

  private goToList() {
    this.navCtrl.navigateForward('/paises');
  }

  private goToAbout() {
    this.navCtrl.navigateForward('/about');
  }

  async presentPopover(ev: any) {
    //popOver do ABOUT
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'custom-popover'
    });
    return await popover.present();
  }

  /** stringified JSON */
  getLocalData() {
    return this.storage.get('paises');
  }  
  setLocalData(paises: string) {
    return  this.storage.set('paises',paises);
  }
  /***/

  setLatLng(lat,lng) {
    this.lat = lat;
    this.lng = lng;
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
}