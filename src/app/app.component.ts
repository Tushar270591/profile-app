import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app';
  languageCodeMap = {
    en : 'English',
    fr : 'French',
    bg : 'Bulgarian'
  }
  constructor(public translate: TranslateService){
    const langs =  ['en', 'fr', 'bg'];
    const browserLang = translate.getBrowserLang();
    translate.addLangs(langs);
    translate.setDefaultLang('en');
    let selectedLang = browserLang.match(/en|fr|bg/) ? browserLang : "en";
    translate.use(selectedLang);
  }

}
