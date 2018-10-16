import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filter } from '../app.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-filter',
  templateUrl: './view-filter.component.html',
  styleUrls: ['./view-filter.component.css']
})
export class ViewFilterComponent implements OnInit {

  @Output() filterChanged: Observable<Filter>;

  filterForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.filterForm = fb.group({
      region: ['All'],
      minDate: ['1995-01-01'],
      maxDate: ['2019-01-01'],
      minor: true,
      adult: true,
      middleAge: true,
      senior: true
    });
    this.filterChanged = this.filterForm.valueChanges;
  }

  ngOnInit() {
  }

}
