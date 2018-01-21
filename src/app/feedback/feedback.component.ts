import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../home/home.service';

declare var google: any;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})


export class FeedbackComponent implements OnInit {

  postDetail: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService
    ) { }

  /*initMap() {
    const uluru = {lat: -25.363, lng: 131.044};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }*/

    ngOnInit() {

      /*var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });*/

      var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Fastoye</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Fastoye</b>, Techinical news and video '+
        '</p>'+
        '</div>';

        let loc = {lat: 28.4595, lng: 77.0266};
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        let mapProp = {
          center: new google.maps.LatLng(28.4595, 77.0266),
          zoom: 50,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        let map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

        let marker = new google.maps.Marker({
          position: loc,
          animation: google.maps.Animation.DROP,
          map: map
        });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }
}
