import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private quoteService: QuoteService) {

  }

  ngOnInit() {
    this.quoteService.getQuote().subscribe(res => {
      console.log(res);
    });
  }
}
