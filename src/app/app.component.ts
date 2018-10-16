import { Component } from '@angular/core';
import { Video, Filter } from './app.types';
import { VideoLoaderService } from './services/video-loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workShopApp';

  videos: Observable<Video[]>;
  selectedVideo: Video;
  filter: Filter;

  constructor(private videoListService: VideoLoaderService) {
    //this is for async pipe (even thought using it on an http call is pretty much useless)
    this.videos = this.videoListService.getVideos();
  }

  ngOnInit() {

  }

}
