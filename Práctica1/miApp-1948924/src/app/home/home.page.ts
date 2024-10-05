import { Component } from '@angular/core';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { IonHeader } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ListaAlumnosComponent, IonHeader]
})
export class HomePage {

  constructor() {}

}
