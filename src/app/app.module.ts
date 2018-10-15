import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';
import { ViewBreakdownComponent } from './view-breakdown/view-breakdown.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoEmbedderComponent,
    ViewBreakdownComponent,
    ViewFilterComponent,
    VideoPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
