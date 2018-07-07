import { Component, OnInit } from '@angular/core';

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
  rows = [{
    "id": "1",
    "options": [{
      "price": 100,
      "title": "Android",
       active:false
    }, {
      "price": 200,
      "title": "ios",
      active:false
    }, {
      "price": 300,
      "title": "windows",
      active:false
    }, {
      "price": 300,
      "title": "windows",
      active:false
    }],
    "title": "Which platform will the app be built on?"
  }, {
    "id": "2",
    "options": [{
      "price": 500,
      "title": "Stock or Template UI",
      active:false
    }, {
      "price": 600,
      "title": "Custom Branded UI",
      active:false
    }, {
      "price": 700,
      "title": "Animated UI",
      active:false
    }, {
      "price": 800,
      "title": "Game Animations",
      active:false
    }],
    "title": "What would your UI theme be?"
  }]
  
  constructor() { }

  ngOnInit() {
  }

}
