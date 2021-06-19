import {Component, OnInit} from '@angular/core';
// Component
import {LoginComponent} from './login/login.component';
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'field-square',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

}
