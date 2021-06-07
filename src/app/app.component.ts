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
  workspaceoptions = fsGlobal.fspObj.workspaceoption;
  assettype = fsGlobal.fspObj.assettypes;
  tasktype = fsGlobal.fspObj.tasktype;

  constructor() {
    console.log('Workspaceoptions', this.workspaceoptions);
    console.log('Assettype', this.assettype);
    console.log('Tasktype',this.tasktype);
  }
}
