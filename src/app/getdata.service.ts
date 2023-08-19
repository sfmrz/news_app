import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() {  }

  doGetTabOne = () => {
    const options = {
      url: 'https://newsapi.org/v2/everything?q=Software%20Engineering&from=2023-08-17&to=2023-08-17&sortBy=popularity&apiKey=c3a12b70242d43f588dc64a04a160f22',
    };

    return from(Http.get(options));
  };

  doGetTabTwo = () => {
    const options = {
      url: 'https://newsapi.org/v2/everything?q=apple&from=2023-08-17&to=2023-08-17&sortBy=popularity&apiKey=c3a12b70242d43f588dc64a04a160f22',
    };

    return from(Http.get(options));
  };
}
