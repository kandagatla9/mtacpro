import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactustopComponent } from './contactustop/contactustop.component';
import { TestComponent } from './test/test.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { IndustriesComponent } from './industries/industries.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactusComponent,
    ContactustopComponent,
    TestComponent,
    IndustriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatCarouselModule.forRoot(),
    IvyCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
