import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoDataService } from "../../services/lo-data.service";

@Component({
  selector: 'app-section-break-page1',
  templateUrl: './section-break-page1.component.html',
  styleUrls: ['../certification-exam.component.scss']
})
export class SectionBreakPage1Component implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  selected = 'yes';
  
  ViewLO(){
    this.dialog.open(viewLODialog3);
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


export class viewLODialog3 {     
  constructor(
    private data: LoDataService
  ) { 
    this.data.changeMessage(true);
  }  
}
