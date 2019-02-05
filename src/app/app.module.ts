import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteService } from './quote.service';
import { QuoteInfoComponent } from './components/quote-info/quote-info.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppComponent, QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
