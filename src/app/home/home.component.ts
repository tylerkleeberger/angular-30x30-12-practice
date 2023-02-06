import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
weeks = [
  { title: 'Week One' },
  { title: 'Week Two' },
  { title: 'Week Three' },
  { title: 'Week Four' },
]
}