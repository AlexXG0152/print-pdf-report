import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './modules/homepage/homepage.module';
import { ShortTableModule } from './modules/short-table/short-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomepageModule, ShortTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
