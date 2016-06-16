import {Page} from 'ionic-angular';

import {FooComponent} from 'agorapulse-apps-core/dist/foo/foo.component';
import {BarComponent} from '../../components/bar/bar';

@Page({
  directives: [BarComponent, FooComponent],
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
}
