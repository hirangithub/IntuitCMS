import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoDataService } from "../services/lo-data.service";


@Component({
  selector: 'app-certification-exam',
  templateUrl: './certification-exam.component.html',
  styleUrls: ['./certification-exam.component.scss']
})

export class CertificationExamComponent implements OnInit {
  
  constructor(
    public dialog: MatDialog
  ) {   }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {

    
    console.log()
  }

  
  onEvent(event) {
    event.stopPropagation();
 }



}


