import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FeedPostModel } from './home.model';

@Injectable()
export class HomeService {
  constructor(public http: Http) {}

  getPosts(): Promise<FeedPostModel[]> {
    return this.http.get('./assets/data/feed.json')
      .toPromise()
      .then(response => response.json().feed as FeedPostModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getParticularPost(post: string): Promise<any> {
    let detail;
    return this.getPosts()
      .then(res => {

          res.filter(function (el) {

            if (el.title === post) {
              detail = el;
            }
            // } else {
            //   return 'u';
            // }
          });
        return detail;
      })
      .catch(this.handleError);
      // return Promise.resolve();
    // return detail;

    /*return this.http.get('./assets/data/feed.json')
      .toPromise()
      .then(response => {
        response.toString();
        console.log(response);
        /!*const feed = response.json().feed as Array<any>;
        console.log(typeof feed);
        console.log(feed);
        feed.filter(function (el) {
          if (el.title === post) {
            return "nu";
          }else {
            return null;
          }
          // return el.title === post;
          });*!/
        })
      .catch(this.handleError);*/
  }
}

/*feed.filter(function (i, n) {
          return n.title === title;*/
