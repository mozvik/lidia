import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
