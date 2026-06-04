import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  constructor(private translate: TranslateService) {}

  init(): void {
    this.translate.onLangChange.pipe(
      startWith({ lang: this.translate.currentLang || 'he' })
    ).subscribe(({ lang }) => {
      document.body.dir = lang === 'en' ? 'ltr' : 'rtl';
      document.documentElement.lang = lang;
    });
  }
}