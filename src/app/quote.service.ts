import { from } from 'rxjs';

export class QuoteService {
  // CORS proxy is used to make request from localhost
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  private apiUri = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json=?';

  constructor() {}

  getQuote() {
    const data = from(fetch(this.proxyUrl + this.apiUri)
      .then(res => res.text())
    );

    return data;
  }
}
