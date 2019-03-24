import { Component, OnInit } from '@angular/core';
import { Quote } from '../../shared/quote.model';
import { QuoteService } from 'src/app/quote.service';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.scss']
})

export class QuoteInfoComponent implements OnInit {
  quoteInfo: Quote = {
    quote: '...loading...',
    author: ''
  };
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuote();
  }

  // Fetch a new random quote
  getQuote() {
    this.quoteService.getQuote()
      .subscribe(res => {
        this.quoteInfo = res;
    });
  }

  // Send quote to Twitter for tweeting
  tweetQuote() {
    const tweetQuote = this.quoteInfo.quote + ' ' + this.quoteInfo.author;
    window.open('https://twitter.com/intent/tweet?text=' + tweetQuote);
  }
}
