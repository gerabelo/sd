import { Component, OnInit } from '@angular/core';
import { WsPontosService } from '../ws-pontos.service';
import { Pais } from '../pais';
import { NavController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { faCompass, faInfoCircle, faChevronCircleLeft, faMapMarker, faPhone, faRecycle, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Location } from '@angular/common';
import { promises } from 'fs';
import { map, filter, scan, finalize } from 'rxjs/operators';
import { prependListener } from 'cluster';
import { resolve } from 'path';
import { Storage } from '@ionic/storage';

declare var google;

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})

export class PaisPage implements OnInit {
  pais: Pais;
  paises: Pais[];

  faCompass = faCompass;
  faInfoCircle = faInfoCircle;
  faChevronCircleLeft = faChevronCircleLeft;
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faRecycle = faRecycle;
  faDesktop = faDesktop;

  myLatLng: {
    lat: number,
    lng: number
  };

  distance = null;

  constructor(
    public wspontos: WsPontosService,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private _location: Location,
    private toastController: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private storage: Storage
  ) {
  
    this.getLocalData().then((paises) => {
      console.log('paises: ', paises);

      /** VERIFICANDO SE HÁ DADOS PARA EXIBIÇÃO OFFLINE */
      if (paises == null) {
        this.wspontos.getDataFromApi()
        .pipe(
          finalize(() => {
            //loading.dismiss();
            this.setPais();
          })
        )
        .subscribe(data => {
          paises = data;
          this.setLocalData(JSON.stringify(paises));
        })
      } else {
        this.paises = JSON.parse(paises);          
 //       loading.dismiss();
        this.setPais();
      }      
    })
  }

  ngOnInit() {
    this.platform.ready().then(async () => {
      
      
      
      
    })
  }

  goBack() {
    this._location.back();
  }
  
  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  private geodesicDistance(lat1: number,lng1: number,lat2: number,lng2: number) {
    // console.log("lat lng: "+lat1+" "+lng1);
    var R = 6371000; // metres
    var φ1 = this.toRad(lat1);
    var φ2 = this.toRad(+lat2);
    var Δφ = Math.sqrt(Math.pow(this.toRad(+lat2)-this.toRad(lat1),2));
    var Δλ = Math.sqrt(Math.pow(this.toRad(+lng2)-this.toRad(lng1),2));
    var a = Math.sin(Δφ/2)*Math.sin(Δφ/2)+Math.cos(φ1)*Math.cos(φ2)*Math.sin(Δλ/2)*Math.sin(Δλ/2);
    var c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = (R * c).toFixed(1);
    // console.log("φ1: "+φ1);
    // console.log("φ2: "+φ2);
    // console.log("Δφ: "+Δφ);
    // console.log("Δλ: "+Δλ);
    // console.log("c: "+c);
    return d;
  }

  public toRad(value: number) {
    return value * Math.PI / 180;
  }

  private goToMapa() {
    this.navCtrl.navigateForward('/mapa');
  }


  /** stringified JSON */
  getLocalData() {
    return this.storage.get('paises');
  }  
  setLocalData(paises: string) {
    return  this.storage.set('paises',paises);
  }
  /***/
  setPais() {
    this.paises.forEach(pais => {
      let pais_ = this.activatedRoute.snapshot.paramMap.get('alpha2Code')
      if (pais.alpha2Code == pais_) {
        this.pais = pais;
        console.log('matched: '+this.pais.name);
      }
      // location.reload();      
    });
  }
}