import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-platzi';

  // items = ['Martin', 'Janet', 'Nombres'];

  products = [
    {
      id: '1',
      name: 'Producto uno',
      price: 400,
      description: 'Producto uno de app',
      image: '../assets/images/camiseta.png'
    },
    {
      id: '2',
      name: 'Producto dos',
      price: 500,
      description: 'Producto dos de app',
      image: '../assets/images/hoodie.png'
    },
    {
      id: '3',
      name: 'Producto tres',
      price: 400,
      description: 'Producto tres de app',
      image: '../assets/images/mug.png'
    },
    {
      id: '4',
      name: 'Producto cuatro',
      price: 500,
      description: 'Producto cuatro de app',
      image: '../assets/images/pin.png'
    },
    {
      id: '5',
      name: 'Producto cinco',
      price: 500,
      description: 'Producto cinco de app',
      image: '../assets/images/stickers1.png'
    },
    {
      id: '6',
      name: 'Producto seis',
      price: 500,
      description: 'Producto seis de app',
      image: '../assets/images/stickers2.png'
    }
  ]

  /* addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  } */

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }
}
