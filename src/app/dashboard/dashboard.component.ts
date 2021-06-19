import { Component, OnInit } from '@angular/core';
import * as fsGlobal from "../global";

@Component({
  selector: 'app-task',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'field-square';
  nav = fsGlobal.fspObj;
  workspaceoptions = fsGlobal.fspObj.workspaceoption;
  assettype = fsGlobal.fspObj.assettypes;
  tasktype = fsGlobal.fspObj.tasktype;
  constructor() { }

  ngOnInit(): void {
  }

}
