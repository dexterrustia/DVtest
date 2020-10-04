import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

export interface Contact {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // private requestURL: string = 'https://postb.in/1601455216626-3363401209935';
  private binUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  BinUrl(): string {
    return this.binUrl;
  }

  saveContact(objContact: Contact, requestURL: string) {
    return this.httpClient
      .post(requestURL, objContact, this.httpOptions)
      .toPromise()
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  }
  createBin() {
    return this.httpClient.post('https://postb.in/api/bin', null);
  }
}
