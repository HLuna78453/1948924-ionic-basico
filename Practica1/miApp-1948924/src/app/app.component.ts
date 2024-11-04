import { Component } from '@angular/core';
import { 
  IonApp, IonRouterOutlet, IonHeader, IonToolbar, 
  IonTitle, IonContent 
} from '@ionic/angular/standalone';

import { ProductosComponent } from './productos/productos.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, 
            IonTitle, IonContent, ProductosComponent],
})
export class AppComponent {
  constructor() {}
}
