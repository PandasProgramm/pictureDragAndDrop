import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  languages: string[] = ['de', 'en'];
  selectedLanguage: string;

  constructor(private translateService: TranslateService) {
    this.selectedLanguage = 'en';
  }

  ngOnInit(): void {
  }

  changeLanguage($event: Event): void {
     if ($event) { this.translateService.use(this.selectedLanguage); }
  }
}
