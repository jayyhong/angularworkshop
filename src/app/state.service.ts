import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';

function getSelectedVideo(s: AppState) {
  return s.videoList.find(v => v.id === s.selectedVideoId);
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  videos = this.store.select(s => s.videoList);
  selectedVideo = this.store.select(getSelectedVideo);
  filteredViews = this.store.select(s => {
    if (!s.selectedVideoId) {
      return [];
    }
    const selectedVideo = getSelectedVideo(s);
    if (!selectedVideo) {
      return [];
    }
    return selectedVideo.viewDetails
    .filter(view => s.filter.region === 'All' || s.filter.region === view.region)
    .filter(view => s.filter.minor || view.age >= 18)
    .filter(view => s.filter.adult || view.age <= 18 || view.age >= 40)
    .filter(view => s.filter.middleAge || view.age <= 40 || view.age >= 60)
    .filter(view => s.filter.senior || view.age <= 60)
    .filter(view => s.filter.maxDate >= view.date)
    .filter(view => s.filter.minDate <= view.date);
  });

  constructor(private store: Store<AppState>) { }
}