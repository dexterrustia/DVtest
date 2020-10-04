import { TestBed } from '@angular/core/testing';

import { Injector } from '@angular/core';
import { WindowToken } from '../injector/window';
import { CustomHrefService } from './custom-href-service.service';
import { AppModule } from '../app.module';

const MockWindow = {
  location: {
    _href: '',
    set href(url: string) {
      this._href = url;
    },
    get href() {
      return this._href;
    },
  },
};

describe('CustomHrefService', () => {
  let service: CustomHrefService;
  let setHrefSpy: jasmine.Spy;

  beforeEach(() => {
    setHrefSpy = spyOnProperty(MockWindow.location, 'href', 'set');
    const injector = Injector.create({
      providers: [
        {
          provide: CustomHrefService,
          useClass: CustomHrefService,
          deps: [WindowToken],
        },
        { provide: WindowToken, useValue: MockWindow },
      ],
    });
    service = injector.get(CustomHrefService);
  });

  it('should be registered on the AppModule', () => {
    service = TestBed.configureTestingModule({
      imports: [AppModule],
    }).get(CustomHrefService);
    expect(service).toEqual(jasmine.any(CustomHrefService));
  });

  describe('#jumpTo', () => {
    it('should modify window.location.href', () => {
      const url = 'http://localhost:9876';
      service.jumpTo(url);
      expect(setHrefSpy).toHaveBeenCalledWith(url);
    });
  });
});
