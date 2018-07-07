import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	service= [
		{
		card:[
			{devlopment:'iso devlopment',
		 text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
		 link:'',
		 linkName:'Get Started'
		},
		{devlopment:'Android devlopment',
		text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
		link:'',
		 linkName:'Get Started'
		},
		{devlopment:'Mobile devlopment',
		text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
		link:'',
		 linkName:'Get Started'
		},
		{devlopment:'App Marketing',
		text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
		link:'',
		 linkName:'Get Started'
		}
			  ]
		}
		
	]
  constructor() { }

  ngOnInit() {
  }

}
