import { Component } from '@angular/core';
import * as fsGlobal from './global';

@Component({
  selector: 'field-square',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'field-square';
  nav = fsGlobal.fspObj;
}
