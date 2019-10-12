import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './app-star.component.html',
  styleUrls: ['./app-star.component.css']
})
export class AppStarComponent implements OnChanges {

  starWidth: number;
  @Input() rating: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick():void{
    console.log(`Clicked on ${this.rating} `);
    this.ratingClicked.emit(`Clicked on ${this.rating} `);

  }
}
