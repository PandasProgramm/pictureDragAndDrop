import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../shared/models/Navitem';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  isOpen = false;
  navBarItems: NavItem[] =
    [
      { value: 'Home', routerLink: 'home' },
      { value: 'gallery', routerLink: 'gallery' },
      { value: 'settings', routerLink: 'settings' }
    ];

  constructor( private translateService: TranslateService ) {
  }

  ngOnInit(): void {
    this.navBarItems.forEach(item => {

    });
  }

}
