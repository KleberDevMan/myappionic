import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Kleber Junio do codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  //executa sempre que a pagina é carregada
  ionViewDidLoad() {
    this.somaDoisNumeros(1, 2);
  }

}
