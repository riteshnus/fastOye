import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {VideoService} from '../videos/video.service';
import {HomeService} from "./home.service";

// import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
    // ComponentsModule
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
