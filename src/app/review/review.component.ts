import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../home/home.service';
import { ShareLink } from 'social-media-sharing';
import {ReviewService} from "./review.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})


export class ReviewComponent implements OnInit {

  reviewDetail: any;
  detailLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService
    ) { }

  ngOnInit(): void {
    const review = this.route.snapshot.paramMap.get('reviewArticle');
    console.log('review art', review);
    this.reviewService
      .getParticularReview(review)
      .then(res => {
        this.reviewDetail = res;
        this.detailLoaded = true;
        console.log(res);
      });
  }

  shareMedia(media: string) {
    const url: string = document.location.href;
    console.log(this.reviewDetail);
    const socialMediaLinks = new ShareLink(media);

    if (media === 'facebook') {
      const shareLink = socialMediaLinks.get({
        u: url,
        quote: this.reviewDetail.name,
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


  openShop(url: string) {
    window.open(url, '_blank');
  }
}
