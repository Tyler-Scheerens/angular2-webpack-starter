import {
  addProviders,
  inject
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => addProviders([
    AppComponent
  ]));

  it('should have a url', inject([ AppComponent ], (app) => {
    expect(app.url).toEqual('https://twitter.com/AngularClass');
  }));

});
