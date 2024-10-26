import { Component, OnInit } from '@angular/core';

import { IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

import { FotoService } from '../foto.service';
import { Foto } from '../foto.model';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
  standalone: true, 
  imports: [
    IonContent, IonButton, IonGrid, IonRow, IonCol,
    NgFor
  ],
})

export class CamaraComponent  implements OnInit {

  constructor(private foto: FotoService) { }

  ngOnInit() {}

  public fotos: Foto[] = this.foto.fotos;

  tomarFoto() {
    this.foto.addNewToGallery();
  }
}
