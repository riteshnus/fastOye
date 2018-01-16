import {Component} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {

  constructor() {}
  /*videos: any;

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
  }*/
}
