import { Component } from '@angular/core';
import {runInThisContext} from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean;
  clicks = [];
  options = {
  weekday: 'long', year: 'numeric', month: 'short',
  day: 'numeric', hour: '2-digit', minute: '2-digit'
};
  date: Date;
  passed5thElement: boolean;
  clickID: number;
  clickObj;

  constructor() {
    this.display = false;
    this.passed5thElement = false;
    this.clickID = 0;
  }

  logClick() {
     if ( this.display ) {
      this.display = false;
    } else {
      this.display = true;
    }
    this.clickID++;
    this.date = new Date();
    this.clickObj = {string: 'click ' + this.clickID + ': ' + this.date.toLocaleTimeString('en-us', this.options), id: this.clickID }
    this.clicks.push(this.clickObj);
    // this.clicks.push(this.clickID);
    if (this.clicks.length >= 5) {
      this.passed5thElement = true;
    }


  }

  toggleDisplay() {
    if ( this.display ) {
      return 'visible';
    } else {
      return 'hidden';
    }
  }

  getbackgroundColor(click) {
    return  click.id >= 5 ? 'blue' : 'grey';
  }

  getID() {
    return this.clickID;
  }


}
