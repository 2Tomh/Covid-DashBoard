import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChartSettingsInterface } from '../../interfaces/chart-settings-interface';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChartSettingsService {
  private apiUrl = `${environment.apiUrl}/chartsettings`;
  constructor(private http: HttpClient) { }

  getSettings(chartName: string): Observable<ChartSettingsInterface> {
    return this.http.get<ChartSettingsInterface>(`${this.apiUrl}/${chartName}`);
  }

  saveSettings(settings: ChartSettingsInterface): Observable<any> {
    return this.http.post(this.apiUrl, {
      ...settings,
      visibleSeries: JSON.stringify(settings.visibleSeries),
      visibleDates: JSON.stringify(settings.visibleDates)
    });
  }
}