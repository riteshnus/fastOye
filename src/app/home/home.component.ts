import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VideoService} from '../videos/video.service';
import {HomeService} from './home.service';
import {FeedModel} from './home.model';
import {ReviewService} from '../review/review.service';
import {PhoneIndModel, PhoneModel} from '../review/review.model';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './homeDummy.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  videos: any;
  feed: FeedModel = new FeedModel();
  review: Array<PhoneIndModel>;

  constructor(
    private router: Router,
    private videoService: VideoService,
    private homeService: HomeService,
    private reviewService: ReviewService
  ) { }

  seeAllLink(input) {
    if (input === 'allPost') {
    console.log('transfer');
    this.router.navigateByUrl('home/allLinks').then( res => {
      console.log(res);
    });
    }else if (input === 'videos') {
      this.router.navigateByUrl('videos');
    }
  }

  ngOnInit() {
    $('.newsSticker').newsTicker({
      row_height: 22,
      max_rows: 1,
      speed: 900000,
      direction: 'up',
      duration: 4000,
      autostart: 1,
      pauseOnHover: 1
    });

    $(function () {
      $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '30', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });
    });

    this.videoService
      .getVideosLess()
      .subscribe(
        data => {
          this.videos = data.items;
         // console.log(this.videos);
        }
      );

    this.homeService
      .getPosts()
      .then(posts => {
        // console.log('post', posts);
        this.feed.posts = posts;
      });

    this.reviewService
      .getPhoneReview()
      .then(review => {
        console.log('review', review);
        this.review = review;
      });
  }

}
