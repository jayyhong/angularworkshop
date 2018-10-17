import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';
import { ViewBreakdownComponent } from './view-breakdown/view-breakdown.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { AppState, videoListReducer, filterReducer, selectedVideoIdReducer } from './state';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoEmbedderComponent,
    ViewBreakdownComponent,
    ViewFilterComponent,
    VideoPreviewComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot<AppState>({
      filter: filterReducer,
      selectedVideoId: selectedVideoIdReducer,
      videoList: videoListReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }