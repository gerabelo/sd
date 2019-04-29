import { Component, OnInit } from '@angular/core';
import { WsPontosService } from '../ws-pontos.service';
import { Pais } from '../pais';

import { MenuController, NavController, PopoverController, AlertController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { faCompass, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PopoverComponent } from '../popover/popover.component';
import { Storage } from '@ionic/storage';

import { map, filter, scan, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})

export class PaisesPage implements OnInit {
  public paises: Pais[] = [];
  public distances: Array<string> = [];

  faCompass = faCompass;
  faInfoCircle = faInfoCircle;

  myLatLng;

  constructor(
    public wspontos: WsPontosService,
    public navCtrl: NavController,
    private geolocation: Geolocation,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private storage: Storage
  ) {
    
  }

  ngAfter

  ngOnInit(): void {
    this.platform.ready().then(async() => {
      const loading = await this.loadingCtrl.create();
      loading.present();

      this.getLocalData().then((paises) => {
        console.log('paises: ', paises);

        /** VERIFICANDO SE HÁ DADOS PARA EXIBIÇÃO OFFLINE */
        if (paises == null) {
          this.wspontos.getDataFromApi()
          .pipe(
            finalize(() => {
              loading.dismiss();
            })
          )
          .subscribe(data => {
            paises = data;
            this.setLocalData(JSON.stringify(paises));
          })
        } else {
          this.paises = JSON.parse(paises);          
          loading.dismiss();
        }      
        /***/

      }).catch((err) => {
        console.log(err);
      });
    })
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  gotoPais(pais: string) {
    this.navCtrl.navigateForward('/pais/'+pais);
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
 
    return d;
  }


  public toRad(value: number) {
    return value * Math.PI / 180;
  }

  private goToMapa() {
    this.navCtrl.navigateForward('/mapa');
  }

  private goToAbout() {
    this.navCtrl.navigateForward('/about');
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  // async loadPosition() {
  //   this.myLatLng = await this.getLocation();
  // }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'custom-popover'
    });
    return await popover.present();
  }

  async alertNoEntries() {
    const alert2 = await this.alertCtrl.create({
      header: `Atenção`,
      message: `<p class='alert'><b>Não há pontos para exibir!</p>`,          
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'alert-cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    return await alert2.present();        
  }

  getLocalData() {
    return this.storage.get('paises');
  }
  setLocalData(paises: string) {
    return  this.storage.set('paises',paises);
  }  
}