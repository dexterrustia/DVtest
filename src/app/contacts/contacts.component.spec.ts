import { HttpClientModule } from '@angular/common/http';
import {
  async,
  ComponentFixture,
  fakeAsync,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { ContactService } from '../services/contact.service';

import { ContactsComponent } from './contacts.component';
import { of } from 'rxjs';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactService: ContactService;
  let createBinSpy: jasmine.Spy;

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
      providers: [ContactService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService);
    fixture.detectChanges();
    createBinSpy = spyOn(contactService, 'createBin').and.returnValue(
      of({
        binId: '1601868408364-4212551461532',
        now: 1601868408364,
        expires: 1601870208364,
      })
    );
  });

  it('contact component should load', fakeAsync(() => {
    expect(component).toBeTruthy();
    expect(
      fixture.debugElement.nativeElement.querySelector('.contact-container')
    ).toBeTruthy();
  }));

  it('should initialize a binId in postBin', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    flushMicrotasks();
    expect(component.message).toEqual('Bin is created');
  }));
});
