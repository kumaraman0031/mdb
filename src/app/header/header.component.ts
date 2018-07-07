import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	menu= [
		{list: 'home',link:'home'},
		{list: 'About us',link:'about'},
		{list: 'our services',link:'empty'},
		{list: 'our work',link:'empty'},
		{list: 'Process',link:'empty'}
	]
  constructor() {
//	  alert(this.tAmount);
  }
	

  ngOnInit() {
  }

}
