import { Component, OnInit } from '@angular/core';

import { environment } from './../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly TOKEN: string = environment.TOKEN;
  private readonly SERVER_URL: string = environment.SERVER_URL;

  link: SafeResourceUrl = '';

  constructor(private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const secretCode = 'GZ1SCqTmpNVRKNNW2lxOY7PbswXSQEl';
    const reportUrl = `${this.SERVER_URL}/reporting/reports/c9d97fd6-e9af-45a4-88f5-212782b30bd4/Sample%20Reports/Sales%20Order%20Detail?`;

    const embedNonce = this.generateRandomString(16);
    const userEmail = 'richard1@mhs.stts.edu';
    const canSaveView = true;
    const hasViews = true;
    const hasExport = true;
    const hasReportComments = true;
    const timestamp = Math.floor(Date.now() / 1000);
    const expirationTime = 100;

    const embedMessage = `embed_nonce=${embedNonce}&embed_user_email=${userEmail}&embed_report_views_edit=${canSaveView}&embed_report_views=${hasViews}&embed_report_export=${hasExport}&embed_report_comments=${hasReportComments}&embed_timestamp=${timestamp}&embed_expirationtime=${expirationTime}`;

    const embedSignature = embedMessage + `&embed_signature=${secretCode}`;

    const url = `${reportUrl}${embedSignature}`;
    this.link = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private generateRandomString(length: number): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}
