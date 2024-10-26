import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { 
  IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, 
  IonInput, IonButton, IonLabel, IonCheckbox 
} from "@ionic/angular/standalone";
import { alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  imports:[
    NgFor, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, 
    IonActionSheet, IonInput, IonButton, IonLabel, IonCheckbox
  ],
  standalone: true
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  public accionEliminar = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  agregarAlumno(): void {
    this.alumno = {
      nombre: '',
      presente: false
    };

    this.alumnos.push(this.alumno);

    console.log(this.alumnos);
  }

  alumnos : alumno[] = [];

}
