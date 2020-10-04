import { Injectable, Inject } from '@angular/core';
import { WindowToken } from '../injector/window';

@Injectable({
  providedIn: 'root',
})
export class CustomHrefService {
  constructor(@Inject(WindowToken) private window: Window) {}

  jumpTo(url: string) {
    this.window.location.href = url;
  }
}
