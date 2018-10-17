import { Action } from '@ngrx/store';
import { Video, Filter } from './app.types';

const VIDEO_LIST_ARRIVED = 'VIDEO_LIST_ARRIVED';
export class VideoListArrived implements Action {
  type = VIDEO_LIST_ARRIVED;
  constructor(readonly videos: Video[]) { }
}

const SELECT_VIDEO = 'SELECT_VIDEO';
export class SelectVideo implements Action {
  type = SELECT_VIDEO;
  constructor(readonly id: string) { }
}

const FILTER_CHANGE = 'FILTER_CHANGE';
export class FilterChange implements Action {
  type = FILTER_CHANGE;
  constructor(readonly filter: Filter) { }
}

const ADD_VIDEO = 'ADD_VIDEO';
export class AddVideo implements Action {
  type = ADD_VIDEO;
  constructor(readonly video: Video) { }
}

//generally top level appstate will be named AppState, can be named whatever you want
//these will contain the states that will be changed
export interface AppState {
  videoList: Video[];
  selectedVideoId: string;
  filter: Filter;
}

//Next we need to define filters
//This is a reducer because we are not annotating the type system to define what it is
//If there is no prevList we assign it to an empty array
export function videoListReducer(prevList: Video[] = [], action: Action) {
  switch (action.type) {
    case VIDEO_LIST_ARRIVED:
      return (action as VideoListArrived).videos;
    case ADD_VIDEO:
      //include all items in array, and add new video in array as well
      return [...prevList, (action as AddVideo).video];
    default:
      return prevList;
  }
}

export function selectedVideoIdReducer(prevId: string, action: Action) {
  switch (action.type) {
    case SELECT_VIDEO:
      return (action as SelectVideo).id;
    case VIDEO_LIST_ARRIVED:
      return (action as VideoListArrived).videos[0].id;
    //select first video when videos arrive, use that ID
    default:
      return prevId;
  }
}

export const defaultFilter: Filter = {
  region: 'All',
  minDate: '1995-01-01',
  maxDate: '2019-01-01',
  minor: true,
  adult: true,
  middleAge: true,
  senior: true
}


export function filterReducer(prevFilter: Filter = defaultFilter, action: Action) {
  switch (action.type) {
    case FILTER_CHANGE:
      return (action as FilterChange).filter;
    default:
      return prevFilter;
  }
}