import { Component } from '@angular/core';
import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-login-modal',
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Iniciar Sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding login-modal">
      <p class="brand">MOTRISERVICE · Desde 2001</p>

      <ion-item>
        <ion-label position="floating">Correo</ion-label>
        <ion-input type="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input type="password"></ion-input>
      </ion-item>

      <ion-button expand="block" class="login-btn">
        Ingresar
      </ion-button>
    </ion-content>
  `,
  styles: [`
    .login-modal {
      --background: #0b0b0b;
      color: #fff;
    }

    .brand {
      text-align: center;
      margin-bottom: 24px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #b000ff;
    }

    ion-item {
      --background: transparent;
      --border-color: #333;
      margin-bottom: 12px;
    }

    .login-btn {
      margin-top: 24px;
      --background: linear-gradient(135deg, #005eff, #b000ff);
    }
  `]
})
export class LoginModalComponent {}