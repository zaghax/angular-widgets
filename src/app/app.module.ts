import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WDatatransferComponent } from './components/w-datatransfer/w-datatransfer.component';
import { WStatisticsComponent } from './components/w-statistics/w-statistics.component';
import { WProfileComponent } from './components/w-profile/w-profile.component';
import { WContactFormComponent } from './components/w-contact-form/w-contact-form.component';

import { DataWidgetsService } from './services/data-widgets.service';


@NgModule({
  declarations: [
    AppComponent,
    WDatatransferComponent,
    WStatisticsComponent,
    WProfileComponent,
    WContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataWidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
