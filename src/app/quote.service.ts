import { from } from 'rxjs';

export class QuoteService {
  // CORS proxy is used to make request from localhost
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  private apiUri = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json=?';

  getQuote() {
    const data = from(fetch(this.proxyUrl + this.apiUri)
      .then(res => res.text())
      .then(quoteData => {
        const parsedQuote = { quote: '', author: '' };
        parsedQuote.quote = quoteData.slice(quoteData.indexOf('<quoteText>') + 11, quoteData.indexOf('</quoteText>'));
        const author = quoteData.slice(quoteData.indexOf('<quoteAuthor>') + 13, quoteData.indexOf('</quoteAuthor>'));

        // If author information isn't provided, assign "- uknown" as author
        parsedQuote.author = author === '' ? '- uknown' : `- ${author}`;
        return parsedQuote;
      })
    );

    return data;
  }
}
