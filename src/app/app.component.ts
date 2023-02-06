import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/plays', icon: 'dashboard', title: 'Play Library'},
  ]
}
