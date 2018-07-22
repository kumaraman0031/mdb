import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {
  toggleClass(item){
	this.countR(item,item.price)   
    item.active = !item.active;
  }
  myCounter: number = 0;
	countR(item,num){
		 
		if(item.active===false){

			this.myCounter = this.myCounter + num;
		}
		else
			{
			this.myCounter = this.myCounter - num;
		}
	
  }
  
  Rows$: Object;
  
  constructor(private data: ProductsService) { }

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.Rows$ = data 
    );
  }

}
