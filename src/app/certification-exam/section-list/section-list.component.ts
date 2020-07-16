import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoDataService } from "../../services/lo-data.service";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

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
  templateUrl: '../view-lo.html',
  styleUrls: ['../certification-exam.component.scss']

})


export class viewLODialog2 {     
  constructor(
    private data: LoDataService
  ) { 
    this.data.changeMessage(true);
  }  
}