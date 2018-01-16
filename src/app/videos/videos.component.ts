import {Component, OnInit} from '@angular/core';
import {VideoService} from './video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})

export class VideosComponent implements OnInit {

  videos: any;

  constructor(
    public videoService: VideoService,
    // public loadingCtrl: Lo,
  ) {
    // this.loading = this.loadingCtrl.create();
  }

  ngOnInit() {
    this.videoService
      .getVideos()
      .subscribe(
        data => {
          this.videos = data.items;
          console.log(this.videos);
          // this.prepareCard(data);
          // this.loading.dismiss();
        }
      );
  }

  openVideo(){
    console.log('open');
  }
}
