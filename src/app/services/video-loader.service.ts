import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../app.types';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/internal/operators';


// Or connect to the hosted demo API (works from StackBlitz):
// const API_URL = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  apiUrl = 'http://api.angularbootcamp.com';

  constructor(private http: HttpClient) {

  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl + '/videos').pipe(shareReplay())
  }

}
