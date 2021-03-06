import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MapComponent } from './map/map.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { SafetyComponent } from './safety/safety.component';
import { masterGoogleMapConfig } from './api-keys';
import { ChatComponent } from './chat/chat.component';

export const googleMapConfig = {
  apiKey: masterGoogleMapConfig.apiKey,
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapComponent,
    GalleryComponent,
    GalleryDetailComponent,
    SafetyComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({}),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
