import { Component } from '@angular/core';

import { FooComponent } from 'agorapulse-apps-core/dist/foo/foo.component';

@Component({
  directives: [FooComponent],
  moduleId: module.id,
  selector: 'web-app',
  templateUrl: 'web.component.html',
  styleUrls: ['web.component.css']
})
export class WebAppComponent {
  title = 'web works!';
}
