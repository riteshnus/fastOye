import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VideoService} from '../videos/video.service';
import {HomeService} from "./home.service";
import {FeedModel} from "./home.model";

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './homeDummy.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  videos: any;
  feed: FeedModel = new FeedModel();

  constructor(
    private router: Router,
    private videoService: VideoService,
    private homeService: HomeService
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
    $('.newsticker').newsTicker({
      row_height: 22,
      max_rows: 1,
      speed: 800,
      direction: 'up',
      duration: 1000,
      autostart: 1,
      pauseOnHover: 1
    });

    this.videoService
      .getVideosLess()
      .subscribe(
        data => {
          this.videos = data.items;
          console.log(this.videos);
          // this.prepareCard(data);
          // this.loading.dismiss();
        }
      );

    this.homeService
      .getPosts()
      .then(posts => {
        console.log('post', posts);
        this.feed.posts = posts;
      });
  }

  goDetail(post) {
    this.router.navigate(['home', {'post' : post}]);
  }
}
