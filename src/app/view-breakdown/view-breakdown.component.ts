import { Component, OnInit, Input } from '@angular/core';
import { Filter, VideoDetails } from '../app.types';

@Component({
  selector: 'app-view-breakdown',
  templateUrl: './view-breakdown.component.html',
  styleUrls: ['./view-breakdown.component.css']
})
export class ViewBreakdownComponent implements OnInit {
  @Input() filter: Filter;
  @Input() views: VideoDetails[];

  get filteredViews() {
    if (!this.views) {
      return [];
    } else if (!this.filter) {
      return this.views;
    }
    return this.views
      .filter(view => this.filter.region === 'All' || this.filter.region === view.region)
      .filter(view => this.filter.minor || view.age >= 18)
      .filter(view => this.filter.adult || view.age <= 18 || view.age >= 40)
      .filter(view => this.filter.middleAge || view.age <= 40 || view.age >= 60)
      .filter(view => this.filter.senior || view.age <= 60)
      .filter(view => this.filter.maxDate >= view.date)
      .filter(view => this.filter.minDate <= view.date);
  }

  constructor() { }

  ngOnInit() {
  }

}