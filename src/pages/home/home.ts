import { Component, OnInit} from '@angular/core';
import { HttpService} from '../../app/service';
import { Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HttpService]
})

export class HomePage implements OnInit{
  items = [];
  data:Object;

  constructor(private httpService:HttpService) {

  }

  ngOnInit(){
    this.fetchTweets();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.fetchTweets();
    console.log('Async operation has ended');
    infiniteScroll.complete();
  }

  fetchTweets() {
  	this.httpService.getData().subscribe((data: Response) => {
      this.items = [...this.items, ...data.json()];
      console.log(this.items);
    });
  }
}