import {Component, OnInit} from '@angular/core';
import * as fsGlobal from './global';


// Component
import {LoginComponent} from './login/login.component';
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'field-square',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'field-square';
  nav = fsGlobal.fspObj;
  workspaceoptions = fsGlobal.fspObj.workspaceoption;
  assettype = fsGlobal.fspObj.assettypes;
  tasktype = fsGlobal.fspObj.tasktype;

  constructor(public dialog: MatDialog) {
    console.log('Workspaceoptions', this.workspaceoptions);
    console.log('Assettype', this.assettype);
    console.log('Tasktype',this.tasktype);
  }

  openDialog() {
    this.dialog.open(LoginComponent, {
      panelClass:'container-bg',
      height: 'auto',
      width: '400px',
      data: {}
    });
  }

  ngOnInit() {
    this.openDialog();
  }

}
