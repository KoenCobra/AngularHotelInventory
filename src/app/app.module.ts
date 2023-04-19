import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoomsListComponent} from './rooms/rooms-list/rooms-list.component';
import {HeaderComponent} from './header/header.component';
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./AppConfig/app.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
