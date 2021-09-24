import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'uploadPic';

  supportLanguage: string[] = ['en', 'de'];
  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.supportLanguage);
    this.translate.setDefaultLang('en');

    const browserLanguage = this.translate.getBrowserLang();
    this.translate.use(browserLanguage);
  }
}
