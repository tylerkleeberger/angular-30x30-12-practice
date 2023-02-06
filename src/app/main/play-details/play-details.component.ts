import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Play } from '../play';

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.scss']
})
export class PlayDetailsComponent {
  currentPlay: Play;
  originalTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set play(value) {
    if(!value) return;
    this.currentPlay = {...value}
    this.originalTitle = this.currentPlay.title;
  }

}
