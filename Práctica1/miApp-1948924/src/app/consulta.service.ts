import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getSpecificProduct(i: string){
    return this.http.get(`https://fakestoreapi.com/products/${i}`)
  }
}
