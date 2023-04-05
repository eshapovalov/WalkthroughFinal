import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  content_loaded: boolean = false;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
  ) { }

  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  

}
