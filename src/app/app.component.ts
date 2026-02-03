import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import {
  IonApp,
  IonHeader,
  IonContent
} from '@ionic/angular/standalone';

import { ModalController } from '@ionic/angular/standalone';
import { LoginModalComponent } from './auth/login-modal.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    IonApp,
    IonHeader,
    IonContent,
    RouterModule
  ]
})
export class AppComponent {

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  // 👉 Click en logo
  goHome() {
    this.router.navigate(['/home']);
  }

  // 👉 Click en "Iniciar Sesión"
  async openLogin() {
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
      backdropDismiss: true
    });

    await modal.present();
  }

}