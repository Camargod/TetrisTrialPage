import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

import {NgbDatepicker, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PlacarPageComponent } from './pages/placar-page/placar-page.component';
import { PlayNowPageComponent } from './pages/play-now-page/play-now-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';





@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    PlacarPageComponent,
    PlayNowPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
