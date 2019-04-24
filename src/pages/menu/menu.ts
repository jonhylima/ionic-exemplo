import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { AlterarMenuPage } from '../alterar-menu/alterar-menu';
import { DetalhesMenuPage } from '../detalhes-menu/detalhes-menu';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  menu: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.getMenu();
  }

  apiUrl = "http://localhost/phpp/crud.php";

  getMenu(){
    let funcao = {'funcao':'getMenu'};
    this.http.post(this.apiUrl, JSON.stringify(funcao))
    .subscribe(
      res=>{
        this.menu = res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  novoMenu(){
    this.navCtrl.push(HomePage);
  }

  detalhesMenu(dados) {
    this.navCtrl.push(DetalhesMenuPage,{
      'menu': dados
    });
  }

  alterarMenu(dados){
    this.navCtrl.push(AlterarMenuPage,{
      'menu': dados
    });
  }    

  deletarMenu(dados){
    const id={
      'funcao': 'deletarMenu',
      'menu_id': dados.menu_id
    }
    console.log(dados);
    this.http.post(this.apiUrl, JSON.stringify(id))
    .subscribe(res => {
      if(res===true){
        this.alertasOk("Deletado com sucesso!");
        let index = this.menu.indexOf(dados);
        if(index > -1){
          this.menu.splice(index, 1);
        }
      }
    });
  }

  alertasOk(mensagem) {
    const alert = this.alertCtrl.create({
      title: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }


}
