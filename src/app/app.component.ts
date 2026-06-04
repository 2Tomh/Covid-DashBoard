import { Component } from '@angular/core';
import { LanguageService } from './../app/main/services/language.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidClient';
  constructor(private languageService: LanguageService) {
    this.languageService.init();
  }
}
