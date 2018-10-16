import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../app.types';

@Component({
  selector: 'app-video-embedder',
  templateUrl: './video-embedder.component.html',
  styleUrls: ['./video-embedder.component.css']
})
export class VideoEmbedderComponent implements OnInit {
  @Input() selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
