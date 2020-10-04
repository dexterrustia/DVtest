import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactName: string = '';
  requestURL: string;
  binUrl: string;
  message: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService
      .createBin()
      .toPromise()
      .then((response) => {
        console.log('response');
        this.requestURL = 'https://postb.in/' + response['binId'];
        this.binUrl = 'https://postb.in/b/' + response['binId'];

        console.log(`requestURL ${this.requestURL}`);
        console.log(`binUrl ${this.binUrl}`);
        this.message = 'Bin is created';
      })
      .catch((err) => {
        console.log(err);
        this.message = 'failed to create Bin';
      });
    console.log(this.message);
  }

  onSubmit(): void {
    console.log(this.contactName);
    const objContact = { name: this.contactName };
    this.contactService.saveContact(objContact, this.requestURL);
    this.contactName = '';
    //this.binUrl = this.contactService.BinUrl();
  }
}
