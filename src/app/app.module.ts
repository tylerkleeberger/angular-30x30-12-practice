import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PlaysComponent } from './main/plays/plays.component';
import { PlayDetailsComponent } from './main/play-details/play-details.component';
import { PlaysListComponent } from './main/plays-list/plays-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaysComponent,
    PlayDetailsComponent,
    PlaysListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
