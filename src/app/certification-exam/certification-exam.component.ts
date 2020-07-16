import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-certification-exam',
  templateUrl: './certification-exam.component.html',
  styleUrls: ['./certification-exam.component.scss']
})

export class CertificationExamComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  
  onEvent(event) {
    event.stopPropagation();
 }

}


