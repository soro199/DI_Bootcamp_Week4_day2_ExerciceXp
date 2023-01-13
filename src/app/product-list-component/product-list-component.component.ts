import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})


export class ProductListComponentComponent {
  Products = [
    {nom:'Sac',price:500},
    {nom:'Pomade',price:200},
    {nom:'Huile',price:2000},
    {nom: 'Chaine',price:270},
    {nom:'Chaussure',price:500}
]

productColor(price:number){

    if(price > 300){

      return 'highlightDirective'
    }
    return 'color'
}


}
