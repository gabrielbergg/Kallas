import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LivesComponent } from './views/lives/lives.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import {MatCardModule} from '@angular/material/card';
import { ContatoComponent } from './views/contato/contato.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivesComponent,
    AboutUsComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
