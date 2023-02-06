import { Component, OnInit } from '@angular/core';
import { PlaysService } from 'src/app/service/plays.service';
import { Play } from '../play';


const emptyPlay: Play = {
  id: null,
  title: '',
  description: '',
  favorite: false,
}

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit{
  plays = [];
  plays$: any;

  constructor(private playsService: PlaysService) { }

  ngOnInit(): void {
    this.fetchPlays();
  }

  selectedPlay = emptyPlay;
  originalTitle = '';

  selectPlay(play) {
    this.selectedPlay = {...play};
  }
  
  reset() {
    this.selectPlay({...emptyPlay})
  }

  fetchPlays() {
    this.plays$ = this.playsService.all();
  }

  savePlay(play) {
    if(play.id) {
      this.updatePlay(play);
    } else {
      this.createPlay(play);
    }
  }

  createPlay(play) {
    this.playsService.create(play)
    .subscribe(result => this.fetchPlays());
  }

  updatePlay(play) {
    this.playsService.create(play)
    .subscribe(result => this.fetchPlays());
  }

  deletePlay(id) {
    this.playsService.delete(id)
    .subscribe(result => this.fetchPlays());
  }

}