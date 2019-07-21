import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  visibility = 'visible';
  number = 0;
  arrayNumbers = [];
  checkIfUserEmpty() {
    return this.userName === '';
  }
  resetUser() {
    this.userName = '';
  }
  addToArray() {
    this.arrayNumbers.push(new Date());
    if (this.number % 2 === 0) {
      this.visibility = 'hidden';
    } else {
      this.visibility = 'visible';
    }
    this.number++;
  }
}
