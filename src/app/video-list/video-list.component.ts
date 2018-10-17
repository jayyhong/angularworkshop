import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../app.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Input() selectedVideo: Video;

  @Output() selection = new EventEmitter<Video>();
  

  constructor() {
  }

  ngOnInit() {
  }

  videoClicked(video: Video) {
    this.selection.emit(video);
  }

}
