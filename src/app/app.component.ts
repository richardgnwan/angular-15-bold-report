import { Component, OnInit } from '@angular/core';

import { environment } from './../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly TOKEN: string = environment.TOKEN;
  private readonly SERVER_URL: string = environment.SERVER_URL;

  link: SafeResourceUrl = '';

  constructor(private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const secretCode = 'YOUR_SECRET_CODE';
    const reportUrl = `${this.SERVER_URL}/reporting/reports/c9d97fd6-e9af-45a4-88f5-212782b30bd4/Sample%20Reports/Sales%20Order%20Detail?`;

    const embedNonce = this.generateRandomString(16);
    const userEmail = 'YOUR_EMAIL';
    const canSaveView = true;
    const hasViews = true;
    const hasExport = true;
    const hasReportComments = true;
    const timestamp = Math.floor(Date.now() / 1000);
    const expirationTime = 100;

    const embedMessage = `embed_nonce=${embedNonce}&embed_user_email=${userEmail}&embed_report_views_edit=${canSaveView}&embed_report_views=${hasViews}&embed_report_export=${hasExport}&embed_report_comments=${hasReportComments}&embed_timestamp=${timestamp}&embed_expirationtime=${expirationTime}`;
    const embedMessageLowerCase = embedMessage.toLowerCase();

    const embedSignature = embedMessageLowerCase + `&embed_signature=${secretCode}`;

    const url = `${reportUrl}${embedSignature}`;
    this.link = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /* VARIABLES */

  /* ReportServer Integration - Demo */
  // serviceUrl: string = 'https://demos.boldreports.com/services/api/ReportingAPI';

  /* ReportServer Integration - Cloud */
  // reportServerUrl: string = this.SERVER_URL + '/reporting/api';
  // serviceUrl: string = 'https://service.boldreports.com/api/Designer';
  // serverServiceAuthorizationToken: string = this.TOKEN;

  /* ReportViewer Integration */
  // reportServerUrl: string = this.SERVER_URL + '/reporting/api/';
  // reportServiceUrl: string = 'https://service.boldreports.com/api/Viewer';
  // serverServiceAuthorizationToken: string = this.TOKEN;
  // reportPath: string = '/Sample Reports/Sales Order Detail';

  /* INTEGRATIONS */
  /**
   * Not working
   * Using JQuery: https://help.boldreports.com/embedded-reporting/javascript-reporting/report-designer/how-to/open-server-report-using-report-path-on-opening-designer/
   */
  // ngOnInit(): void {
  //   $(function () {
  //     $("#designer").boldReportDesigner({
  //       serviceUrl: 'https://service.boldreports.com/api/Designer',
  //       reportServerUrl: environment.SERVER_URL + '/reporting/api',
  //       serviceAuthorizationToken: environment.TOKEN
  //     });
  //     var designerObj = $('#designer').data('boldReportDesigner');
  //     designerObj.openReport('/Sample Reports/Sales Order Detail');
  //   })
  // }

  /**
   * Not working
   * Using @ViewChild
   */
  // ngAfterViewInit(): void {
  //   this.initializeBoldReportsDesigner();
  // }

  // private initializeBoldReportsDesigner() {
  //   const designerObject: any =
  //     this.reportDesigner.nativeElement['boldReportDesigner'];
  //   if (designerObject) {
  //     console.log('openning report');
  //     designerObject.openReport('/Sample Reports/Sales Order Detail');
  //   } else {
  //     console.error('Bold Reports Designer object not found.');
  //   }
  // }

  private generateRandomString(length: number): string {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}
