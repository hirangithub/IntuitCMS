import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoDataService } from "../services/lo-data.service";

@Component({
  selector: 'app-certification-exam',
  templateUrl: './certification-exam.component.html',
  styleUrls: ['./certification-exam.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CertificationExamComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  selected = 'yes';
  
  ViewLO(){
    this.dialog.open(viewLODialog2);
  }

  onEvent(event) {
    event.stopPropagation();
 }

}


@Component({
  selector: 'view-lo',
  templateUrl: 'view-lo.html',
  styleUrls: ['./certification-exam.component.scss']

})


export class viewLODialog2 {     
  constructor(
    private data: LoDataService
  ) { 
    this.data.changeMessage(true);
  }  
}