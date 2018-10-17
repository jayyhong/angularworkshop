import { Component } from '@angular/core';
import { Video, Filter } from '../app.types';
import { VideoLoaderService } from '../services/video-loader.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/internal/operators';
import { Store } from '@ngrx/store';
import { AppState, VideoListArrived, SelectVideo, FilterChange } from '../state';
import { StateService } from '../state.service';

const videoIdQueryParam = 'videoId';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  videos = this.stateManager.videos;
  selectedVideo = this.stateManager.selectedVideo;
  filteredViews = this.stateManager.filteredViews;

  constructor(
    private videoListService: VideoLoaderService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private stateManager: StateService
  ) {
    videoListService.getVideos()
      .pipe(map(v1 => new VideoListArrived(v1)))
      .subscribe(a => store.dispatch(a));
    this.route.queryParams.pipe(
      map(params => params[videoIdQueryParam]),
      map(id => new SelectVideo(id))
    )
      .subscribe(a => store.dispatch(a));
  }

  ngOnInit() {

  }

  setSelectedVideo(v: Video) {
    this.router.navigate([], { queryParams: { [videoIdQueryParam]: v.id }, queryParamsHandling: 'merge' });
  }

  setFilter(f: Filter) {
    this.store.dispatch(new FilterChange(f));
  }

}
