import {Component} from "@angular/core";
import {NavController, LoadingController, ToastController} from "ionic-angular";
import {CarService} from "../../services/car-service";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-checkout-car',
  templateUrl: 'checkout-car.html'
})
export class CheckoutCarPage {
  // car shop information
  public shop: any;
  // car info
  public car: any;
  // date from
  public dateFrom = new Date();
  // date to
  public dateTo = new Date();

  constructor(public nav: NavController, public carService: CarService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
    this.shop = carService.getItem(1);
    this.car = this.shop.cars[0];
  }

  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Car Rent Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(HomePage);
    }, 3000)
  }
}
