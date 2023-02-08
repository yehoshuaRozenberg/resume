import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AsideComponent } from './component/aside/aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ResumeComponent } from './component/resume/resume.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
