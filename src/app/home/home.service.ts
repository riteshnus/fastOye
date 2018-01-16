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

}

/*feed.filter(function (i, n) {
          return n.title === title;*/
