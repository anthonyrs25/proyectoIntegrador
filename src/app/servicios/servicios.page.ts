import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Ionic Standalone components */
import {
  IonContent
} from '@ionic/angular/standalone';

/* Router (por si luego navegas desde servicios) */
import { RouterModule } from '@angular/router';

/* Modal */
import { ModalController } from '@ionic/angular/standalone';

/* Modal de servicio */
import { ServiceModalComponent } from './service-modal.component';

@Component({
  standalone: true,
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  imports: [
    CommonModule, // *ngFor, *ngIf
    RouterModule
]
})
export class ServiciosPage {

  /* ================================
     LISTA DE SERVICIOS – MOTRISERVICE
     ================================ */

  servicios: {
    nombre: string;
    corto: string;
    detalle: string;
    icono?: string;
  }[] = [

    {
      nombre: 'Diagnóstico Computarizado',
      corto: 'Escáner profesional',
      detalle:
        'Diagnóstico electrónico avanzado de ECU, sensores, actuadores y sistemas inteligentes del vehículo.'
    },

    {
      nombre: 'Mecánica General',
      corto: 'Motor y transmisión',
      detalle:
        'Mantenimiento y reparación integral de motores, cajas de cambio, embragues y sistemas de potencia.'
    },

    {
      nombre: 'Suspensión y Frenos',
      corto: 'Seguridad total',
      detalle:
        'Revisión y reparación de suspensión, amortiguadores, alineación, frenos ABS y discos ventilados.'
    },

    {
      nombre: 'Electricidad Automotriz',
      corto: 'Precisión eléctrica',
      detalle:
        'Sistema eléctrico completo: arranque, alternador, cableado, iluminación y módulos electrónicos.'
    },

    {
      nombre: 'Mantenimiento Preventivo',
      corto: 'Vida útil del vehículo',
      detalle:
        'Cambios de aceite, filtros, correas, fluidos y revisiones técnicas programadas.'
    },

    {
      nombre: 'Ingeniería Automotriz',
      corto: 'Análisis técnico',
      detalle:
        'Diagnóstico avanzado basado en ingeniería para optimizar rendimiento, consumo y confiabilidad.'
    }

  ];

  /* ================================
     CONSTRUCTOR
     ================================ */

  constructor(
    private modalCtrl: ModalController
  ) {}

  /* ================================
     ABRIR MODAL DE SERVICIO
     ================================ */

  async openService(servicio: {
    nombre: string;
    corto: string;
    detalle: string;
  }) {

    const modal = await this.modalCtrl.create({
      component: ServiceModalComponent,
      componentProps: {
        servicio
      },
      cssClass: 'service-modal'
    });

    await modal.present();
  }
  galleryImages = [
  {
    src: 'assets/aceite.jpg',
    alt: 'Diagnóstico automotriz',
    label: 'Diagnóstico Profesional'
  },
  {
    src: 'assets/escaner.jpg',
    alt: 'Mantenimiento',
    label: 'Mantenimiento Preventivo'
  },
  {
    src: 'assets/frenos.jpg',
    alt: 'Ingeniería automotriz',
    label: 'Más de 20 años de experiencia'
  },
  {
    src: 'assets/motor.jpg',
    alt: 'Taller MOTRISERVICE',
    label: 'Agendar una revisión'
  }
];

}