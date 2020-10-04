import { HttpClientModule } from '@angular/common/http';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { ContactService } from '../services/contact.service';

import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactService: jasmine.SpyObj<ContactService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        //HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
      ],
      declarations: [ContactsComponent],
      providers: [
        ContactService,
        // {
        //   provide: ContactService,
        //   useFactory: () => spyOnClass(ContactService),
        // },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService);
    fixture.detectChanges();
  });

  it('contact component should load', () => {
    expect(
      fixture.debugElement.nativeElement.querySelector('.contact-container')
    ).toBeTruthy();
  });

  it('should initialize a binId in postBin', fakeAsync(() => {
    const fixture = TestBed.createComponent(ContactsComponent);
    const app = fixture.componentInstance;
    let message: string;
    //   setTimeout(() => {
    //     expect(app.message).toEqual('Bin is created');
    //   }, 1000);
  }));
});
