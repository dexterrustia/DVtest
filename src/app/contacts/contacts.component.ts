import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactName: string = '';
  binUrl: string;

  constructor(private contactService: ContactService) {
    this.contactService.createBin();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.contactName);
    const objContact = { name: this.contactName };
    this.contactService.saveContact(objContact);
    this.contactName = '';
    this.binUrl = this.contactService.BinUrl();
  }
}
