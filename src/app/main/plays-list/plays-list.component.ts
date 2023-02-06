import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Play } from '../play';

@Component({
  selector: 'app-plays-list',
  templateUrl: './plays-list.component.html',
  styleUrls: ['./plays-list.component.scss']
})
export class PlaysListComponent {
  @Input() plays: Play[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
