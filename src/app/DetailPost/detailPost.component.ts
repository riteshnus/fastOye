import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detailPost.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailPostComponent implements OnInit{

  postDetail: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService
    ) {
    const post = this.route.snapshot.paramMap.get('post');
    console.log(post);
    this.homeService
      .getPosts()
      .then(res => {
        console.log(res);
        let ab = null;
        res.filter(function (el) {
          if (el.title === post) {
            ab = el;
          }
        });
        this.postDetail = ab;
      });
  }

  ngOnInit(): void {
    /*const post = this.route.snapshot.paramMap.get('post');
    console.log(post);
    this.homeService
      .getPosts()
      .then(res => {
        console.log(res);
        let ab = null;
        res.filter(function (el) {
          if (el.title === post) {
            ab = el;
          }
        });
        this.postDetail = ab;
      });*/
  }


}
