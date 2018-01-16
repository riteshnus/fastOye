import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import {PostComponent} from './post/post.component';
import {AllLinksComponent} from './allLinks/allLinks.component';
import { DetailPostComponent } from './DetailPost/detailPost.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SignupComponent } from './signup/signup.component';
// import { LandingComponent } from './landing/landing.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: 'videos', component: VideosComponent },
  { path: 'home/allLinks', component: AllLinksComponent },
  { path: 'posts', component: PostComponent },
  { path: 'home/:post', component: DetailPostComponent },
  // { path: 'user-profile',     component: ProfileComponent },
  // { path: 'signup',           component: SignupComponent },
  // { path: 'landing',          component: LandingComponent },
  // { path: 'nucleoicons',      component: NucleoiconsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
