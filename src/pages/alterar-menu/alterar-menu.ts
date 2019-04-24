import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the AlterarMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-menu',
  templateUrl: 'alterar-menu.html',
})
export class AlterarMenuPage {

  menu: any;
  formMenu: FormGroup;
  apiUrl: string = "http://localhost/phpp/crud.php";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public appCtrl: App
    ) {
      this.menu = navParams.get('menu');
      this.formMenu = this.criarMeuForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarMenuPage');
  }

  private criarMeuForm(){
    return this.formBuilder.group({
      menu_descricao: [this.menu['menu_descricao'], Validators.required],
      menu_link: [this.menu['menu_descricao'], Validators.required],
      menu_icone: this.menu['menu_icone'],
      menu_id: this.menu['menu_id'],
      funcao: 'alterarMenu'
    });
  }

  alterarMenu(){
 
    const dados = this.formMenu.value;
    this.http.post(this.apiUrl, JSON.stringify(dados))
    .subscribe(res=>{
      if(res===true){
        console.log(res);
        this.alertasOk("Alterado com sucesso");
        this.appCtrl.getRootNav().setRoot(MenuPage);
      }
    })
  }

  alertasOk(mensagem) {
    const alert = this.alertCtrl.create({
      title: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

}
