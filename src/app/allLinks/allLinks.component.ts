
import {Component} from '@angular/core';
import construct = Reflect.construct;
import {Router} from '@angular/router';

@Component({
  selector: 'app-alllinks',
  templateUrl: './allLinks.component.html',
  styleUrls: ['./allLinks.component.scss']
})

export class AllLinksComponent {

  constructor(
    private router: Router
  ) {
    console.log('hehe');
  }

}
