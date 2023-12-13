import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BoldReportDesignerModule } from '@boldreports/angular-reporting-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '../globals';

// Report viewer
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
// Report Designer
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';

// data-visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';

// code-mirror
import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/vb/vb';

import * as CodeMirror from 'codemirror';
const codemirror = 'CodeMirror';
window[codemirror] = CodeMirror;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BoldReportDesignerModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
