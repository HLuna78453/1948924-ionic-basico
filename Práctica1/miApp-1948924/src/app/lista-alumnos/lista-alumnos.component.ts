import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { IonList, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  imports:[NgFor, IonList, IonItem],
  standalone: true
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
}
