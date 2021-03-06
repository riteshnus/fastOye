import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../home/home.service';
import { ShareLink } from 'social-media-sharing';

@Component({
  selector: 'app-detail',
  templateUrl: './detailPost.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailPostComponent implements OnInit{

  postDetail: any;
  detailLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService
    ) { }

  ngOnInit(): void {
    const post = this.route.snapshot.paramMap.get('post');
    this.homeService
      .getParticularPost(post)
      .then(res => {
        this.postDetail = res;
        this.detailLoaded = true;
        console.log(res);
      });
  }

  shareMedia(media: string) {
    const url: string = document.location.href;
    console.log(this.postDetail);
    const socialMediaLinks = new ShareLink(media);

    if (media === 'facebook') {
      const shareLink = socialMediaLinks.get({
        u: url,
        quote: this.postDetail.title,
        hashtag: '#Fastoye'
      });
    } else if (media === 'twitter') {
      const shareLink = socialMediaLinks.get({
        url: url,
        via: 'Fastoye',
        hashtag: '#Fastoye'
      });
    } else if (media === 'googleplus') {
      const shareLink = socialMediaLinks.get({
        url: url,
      });
    }

    socialMediaLinks.open();

  }

}
