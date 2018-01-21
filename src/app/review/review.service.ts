import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PhoneIndModel } from './review.model';

@Injectable()
export class ReviewService {
  constructor(public http: Http) {}

  getPhoneReview(): Promise<PhoneIndModel[]> {
    return this.http.get('./assets/data/phone.json')
      .toPromise()
      .then(response => response.json().phone as PhoneIndModel[])
      .catch(this.handleError);
  }

  getParticularReview(review: string): Promise<any> {
    let detail;
    return this.getPhoneReview()
      .then(res => {
        res.filter(function (el) {
          if (el.name === review) {
            detail = el;
          }
        });
        return detail;
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

