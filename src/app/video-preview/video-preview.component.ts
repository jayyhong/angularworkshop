import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../app.types';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.css']
})
export class VideoPreviewComponent implements OnInit {
  @Input('video') video: Video[]

  constructor() { }

  ngOnInit() {
  }

}
