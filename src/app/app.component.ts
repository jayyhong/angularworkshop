import { Component } from '@angular/core';

import { videos } from './sample-data';
import { Video } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  videos: Video[] = videos;

}
