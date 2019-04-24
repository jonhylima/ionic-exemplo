import { Component } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    public alertCtrl: AlertController,
    public appCtrl: App
    ) {

  }

  dados = {};
  apiUrl = 'http://localhost/phpp/crud.php';
  
  logForm(){
    let novoDados={
      'funcao': 'novoMenu',
      'dados': this.dados
    }
    this.http.post(this.apiUrl, JSON.stringify(novoDados))
    .subscribe(
      dados=>{
        if(dados){
          this.alertasOk("Inserido com sucesso!");
          this.appCtrl.getRootNav().setRoot(MenuPage);
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  alertasOk(mensagem) {
    const alert = this.alertCtrl.create({
      title: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }



}
