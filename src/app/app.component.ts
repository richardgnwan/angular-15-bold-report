import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly TOKEN: string = 'YOUR_TOKEN_HERE';
  private readonly SERVER_URL: string = 'YOUR_SERVER_URL';

  // ReportServer Integration - Demo
  // serviceUrl: string = 'https://demos.boldreports.com/services/api/ReportingAPI';

  // ReportServer Integration - Cloud
  // reportServerUrl: string = this.SERVER_URL + '/reporting/api';
  // serviceUrl: string = 'https://service.boldreports.com/api/Designer';
  // serverServiceAuthorizationToken: string = this.TOKEN;

  // ReportViewer Integration
  reportServerUrl: string = this.SERVER_URL + '/reporting/api/';
  reportServiceUrl: string = 'https://service.boldreports.com/api/Viewer';
  serverServiceAuthorizationToken: string = this.TOKEN;
  reportPath: string = '/Sample Reports/Sales Order Detail';

}
