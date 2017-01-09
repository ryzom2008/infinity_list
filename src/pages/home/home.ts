import { Component, OnInit} from '@angular/core';
import { HttpService} from '../../app/service';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HttpService]
})

export class HomePage implements OnInit{
  items = [];
  data:Object;

  constructor(private httpService:HttpService) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  ngOnInit(){
    this.fetchTweets();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.fetchTweets();

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  fetchTweets() {
  	this.httpService.getData().subscribe((data: Response) => {
      this.items = [...this.items, ...data.json()];
      console.log(this.items);
    });
  }
}





