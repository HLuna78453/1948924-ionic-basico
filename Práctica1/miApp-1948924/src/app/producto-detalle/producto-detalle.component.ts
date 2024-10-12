import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

import { 
  IonList, IonItem, IonLabel, IonCardHeader, IonCardContent, IonCard,
  IonCardTitle, IonContent 
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
  imports:[
    IonList, IonItem, IonLabel, IonCardHeader, 
    IonCardContent, IonCard, IonCardTitle, IonContent
  ],
  standalone: true
})
export class ProductoDetalleComponent  implements OnInit {

  constructor(private consulta: ConsultaService, private ruta: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.idProducto);
    this.realizarConsultaDetalle(this.idProducto);
  }

  idProducto: string = this.ruta.snapshot.params['id'];

  producto: any = {};

  realizarConsultaDetalle(idProducto: string): void {
    this.consulta.getSpecificProduct(idProducto)
    .subscribe((resp: Object) => { //toma la respuesta de la consulta al servidor
      console.log(resp); //imprime  la respuesta en consola
      this.producto = resp as any; //asigna la respuesta a producto
    })
  }
}
