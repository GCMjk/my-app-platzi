import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-platzi';

  items = ['Martin', 'Janet', 'Nombres'];

  products: Product[] = [
    {
      id: '1',
      name: 'Prenda',
      image: 'assets/images/camiseta.png',
      price: 2000,
      description: 'Descripcion del producto'
    },
    {
      id: '2',
      name: 'Prenda',
      image: 'assets/images/hoodie.png',
      price: 2100,
      description: 'Descripcion del producto'
    },
    {
      id: '2',
      name: 'Prenda',
      image: 'assets/images/mug.png',
      price: 2200,
      description: 'Descripcion del producto'
    },
    {
      id: '3',
      name: 'Prenda',
      image: 'assets/images/pin.png',
      price: 2300,
      description: 'Descripcion del producto'
    },
    {
      id: '4',
      name: 'Prenda',
      image: 'assets/images/stickers1.png',
      price: 2400,
      description: 'Descripcion del producto'
    },{
      id: '5',
      name: 'Prenda',
      image: 'assets/images/stickers2.png',
      price: 2500,
      description: 'Descripcion del producto'
    },
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
