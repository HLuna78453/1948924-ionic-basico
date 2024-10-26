import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import { ProductosComponent } from '../productos/productos.component';
import { RouterLink } from '@angular/router';

import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ProductosComponent, RouterLink, ListaAlumnosComponent],
})
export class HomePage {
  constructor() {}
}
