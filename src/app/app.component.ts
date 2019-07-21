import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  checkIfUserEmpty() {
    return this.userName === '';
  }
  resetUser() {
    this.userName = '';
  }
}
