import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';

xdescribe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
