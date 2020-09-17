import { Component, Input, OnInit } from '@angular/core';
import { TracksService } from 'src/app/services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  tracks: any = [];

  constructor(private service: TracksService) { }

  ngOnInit(): void {
   this.getTracks();
  }
  
  
  getTracks() {
    this.service.getTracks().subscribe(
      tracks => {
        this.tracks = tracks;
      },
    );
  }
}
