import { Component, OnInit, Input } from '@angular/core';
import { Filter, VideoDetails } from '../app.types';

@Component({
  selector: 'app-view-breakdown',
  templateUrl: './view-breakdown.component.html',
  styleUrls: ['./view-breakdown.component.css']
})
export class ViewBreakdownComponent implements OnInit {
  @Input() views: VideoDetails[];

  constructor() { }

  ngOnInit() {
  }

}