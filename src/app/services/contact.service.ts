import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Contact {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private requestURL: string = 'https://postb.in/1601455216626-3363401209935';
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

  async saveContact(objContact: Contact) {
    console.log(objContact);
    // we don't need any return here
    this.httpClient
      .post(this.requestURL, objContact, this.httpOptions)
      .toPromise()
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  }
  async createBin() {
    await this.httpClient
      .post('https://postb.in/api/bin', null)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.requestURL = 'https://postb.in/' + response['binId'];
        this.binUrl = 'https://postb.in/b/' + response['binId'];

        console.log(`requestURL ${this.requestURL}`);
        console.log(`binUrl ${this.binUrl}`);
        return this.binUrl;
      });
  }
  //Getter
}
