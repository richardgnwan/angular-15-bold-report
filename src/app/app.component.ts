import { Component } from '@angular/core';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly TOKEN: string = environment.TOKEN;
  private readonly SERVER_URL: string = environment.SERVER_URL;
  private readonly REPORT_SERVER_URL:string = this.SERVER_URL + '/reporting/api';

  constructor() {}

  reportServerUrl: string = this.REPORT_SERVER_URL;
  serviceUrl: string = 'https://service.boldreports.com/api/Designer';
  serverServiceAuthorizationToken: string = this.TOKEN;

  controlInitialized() {
    let designerObject: any = $('#designer').data('boldReportDesigner');
    designerObject.openReport('/Sample Reports/Sales Order Detail');
  }
}
