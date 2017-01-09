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

    this.fetchTweets().then(()=>{
      infiniteScroll.complete();
    });

    console.log('Async operation has ended');

  }
  fetchTweets() {
      return this.httpService.getData().then((data: Response) => {
        this.items = [...this.items, ...data.json()];
      });
    }

}

