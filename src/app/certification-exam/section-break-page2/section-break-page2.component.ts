import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoDataService } from "../../services/lo-data.service";

@Component({
  selector: 'app-section-break-page2',
  templateUrl: './section-break-page2.component.html',
  styleUrls: ['../certification-exam.component.scss']
})
export class SectionBreakPage2Component implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  selected = 'yes';

  ViewLO(){
    this.dialog.open(viewLODialog4);
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


export class viewLODialog4 {     
  constructor(
    private data: LoDataService
  ) { 
    this.data.changeMessage(true);
  }  
}
