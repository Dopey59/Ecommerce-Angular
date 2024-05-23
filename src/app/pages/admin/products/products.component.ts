import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'sty-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

isSidePanelVisible: boolean=false;

productObj: any = {
  "productId": 0,
  "productSku": "" ,
  "productName": "" ,
  "productPrice" : "" ,
  "productShortName" : "",
  "productDescription" : "",
  "createDate" : new Date(),
  "deliveryTimeSpan" : "",
  "categoryId" : "",
  "productImageUrl" : "",
}

constructor(private productSrv: ProductService) {
  
}


openSidePanel(){
  this.isSidePanelVisible = true;
}

closeSidePanel(){
  this.isSidePanelVisible = false;
}
}
