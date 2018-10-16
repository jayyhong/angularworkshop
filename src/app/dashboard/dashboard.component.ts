import { Component } from '@angular/core';
import { Video, Filter } from '../app.types';
import { VideoLoaderService } from '../services/video-loader.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/internal/operators';

const videoIdQueryParam = 'videoId';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'workShopApp';

  videos: Observable<Video[]>;
  selectedVideo: Observable<Video>;
  filter: Filter;

  constructor(private videoListService: VideoLoaderService, private route: ActivatedRoute, private router: Router) {
    this.videos = this.videoListService.getVideos();
    this.selectedVideo = this.route.queryParams.pipe(
      map(params => params[videoIdQueryParam]),
      switchMap((id: string) => this.videos.pipe(map(vl => vl.find(v => v.id === id))))
    )
  }

  ngOnInit() {

  }

  setSelectedVideo(v: Video) {
    this.router.navigate([], { queryParams: { [videoIdQueryParam]: v.id }, queryParamsHandling: 'merge' });
  }

}
