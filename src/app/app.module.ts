import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app.routing';
import {HomeModule} from './home/home.module';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {RouterModule} from "@angular/router";
import {VideosComponent} from "./videos/videos.component";
import {VideoService} from "./videos/video.service";
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from "./post/post.component";
import {AllLinksComponent} from "./allLinks/allLinks.component";
import {HomeService} from "./home/home.service";
import {HttpModule} from "@angular/http";
import {DetailPostComponent} from "./detailPost/detailPost.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {StarRatingModule} from "angular-star-rating";
import {ReviewComponent} from "./review/review.component";
import {ReviewService} from "./review/review.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VideosComponent,
    PostComponent,
    DetailPostComponent,
    FeedbackComponent,
    AllLinksComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    StarRatingModule.forRoot(),
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    HomeModule
  ],
  providers: [
    VideoService,
    HomeService,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
