import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { IonList, IonItem, IonLabel, IonCardHeader, IonCardContent, IonCard } from "@ionic/angular/standalone";
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  imports:[NgFor, IonList, IonItem, IonLabel, IonCardHeader, IonCardContent, IonCard],
  standalone: true
})
export class ProductosComponent  implements OnInit {

  constructor(private consulta: ConsultaService) { }

  ngOnInit() {
    this.consulta.getProductos().subscribe((resp: Object) => {
      console.log(resp);      
      this.productos = resp as any[];  
     });
  }

  productos: any = [];
}

  

  
