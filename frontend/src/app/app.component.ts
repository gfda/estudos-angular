import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private readonly APP_TITLE = 'frontend';
  
  public title = this.APP_TITLE;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.translate.currentLang);
  }
}
