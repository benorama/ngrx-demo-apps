import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebAppComponent } from '../app/web.component';

beforeEachProviders(() => [WebAppComponent]);

describe('App: Web', () => {
  it('should create the app',
      inject([WebAppComponent], (app: WebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'web works!\'',
      inject([WebAppComponent], (app: WebAppComponent) => {
    expect(app.title).toEqual('web works!');
  }));
});
