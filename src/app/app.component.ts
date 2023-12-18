import { AfterViewInit, Component } from '@angular/core';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  private readonly TOKEN: string = environment.TOKEN;
  private readonly SERVER_URL: string = environment.SERVER_URL;
  private readonly REPORT_SERVER_URL:string = this.SERVER_URL + '/reporting/api';

  constructor() {}

  /* VARIABLES */

  /* ReportServer Integration - Demo */
  // serviceUrl: string = 'https://demos.boldreports.com/services/api/ReportingAPI';

  /* ReportServer Integration - Cloud */
  // reportServerUrl: string = this.REPORT_SERVER_URL;
  // serviceUrl: string = 'https://service.boldreports.com/api/Designer';
  // serverServiceAuthorizationToken: string = this.TOKEN;

  /* ReportViewer Integration */
  // reportServerUrl: string = this.REPORT_SERVER_URL;
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
  ngAfterViewInit(): void {
    this.initializeBoldReportDesginerJquery();
  }

  // private initializeBoldReportsDesigner() {
  //   const designerObject: any = this.reportDesigner.nativeElement['boldReportDesigner'];
  //   if (designerObject) {
  //     console.log('openning report');
  //     designerObject.openReport('/Sample Reports/Sales Order Detail');
  //   } else {
  //     console.error('Bold Reports Designer object not found.');
  //   }
  // }

  private initializeBoldReportDesginerJquery() {
    $("#designer").boldReportDesigner({
      serviceUrl: 'https://service.boldreports.com/api/Designer',
      reportServerUrl: environment.SERVER_URL + '/reporting/api',
      serviceAuthorizationToken: environment.TOKEN
    });
    var designerObj = $('#designer').data('boldReportDesigner');
    designerObj.openReport('/Sample Reports/Sales Order Detail');
  }
}
