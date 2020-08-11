import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  public likeSearch = 0;
  public wordSearch = '';
  public monthSearch = 0;
  twat: Tweet[];
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
       console.log(this.twat.length);
   }

   onChange(event: any) {
     this.wordSearch = event.target.value;
   }

   checkLikes(event: any) {
      this.likeSearch = event.target.value;
   }

   checkMonth(i: number) {
    this.monthSearch = i;
   }

  ngOnInit() {
  }

}
