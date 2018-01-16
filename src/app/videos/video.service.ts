import { Injectable } from '@angular/core';
import {BaseRequestOptions, Http, RequestMethod, RequestOptions} from '@angular/http';
import { constant } from '../shared/constant';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import { HttpClient , HttpRequest, HttpParams } from '@angular/common/http';


@Injectable()
export class VideoService {

  allVideos: any;
  constructor(public http: HttpClient) {}

  getVideos(): Observable<any> {
    const cmd = constant.constant.videoUrl;
    return this.doGet(cmd);
  }

  getVideosLess(): Observable<any> {
    const cmd = constant.constant.videoUrlLess;
    return this.doGet(cmd);
  }

  doGet(path): Observable<any> {
    console.log('doGet');
    return this.doGetRequest(path);
  }

  private doGetRequest(path): Observable<any> {
    console.log('doRequest');
    const url = path;

    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const body = '';

    /*if (data) {
      body = JSON.stringify(data);
    }*/

    /* let requestOptions = new RequestOptions({
        method: method,
        url:url,
        headers: headers,
        body: body
      });*/


    /*return this.http.get(url)
      .subscribe(
        (data: any[]) => {
          this.allVideos = data;
          console.log(data)
        }
      )*/

    return this.http.get(url);
    /*return this.http.request(new Request(requestOptions))
      .map(this.extractData)
      .catch(this.handleError);*/
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    /*if (error instanceof Response) {

      if (error.status === 401) {
        if(this._authSource)
        {
          this._authSource.next(false);
        }
        this._token = '';
      }

      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }*/

    console.error(errMsg);
    return Observable.throw(error);
  }


  /*getData(): Promise<LiveListingPageModel> {
    return this.http.get('./assets/example_data/live-listing.json')
      .toPromise()
      .then(response => response.json() as LiveListingPageModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/

}
