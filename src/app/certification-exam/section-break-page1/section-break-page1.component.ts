import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoDataService } from "../../services/lo-data.service";

@Component({
  selector: 'app-section-break-page1',
  templateUrl: './section-break-page1.component.html',
  styleUrls: ['../certification-exam.component.scss']
})
export class SectionBreakPage1Component implements OnInit {

  @ViewChild('spacer') spacer;
  isSticky: boolean = false;
  isStickyVal:any = 0;

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

 @HostListener('window:scroll', ['$event'])
  checkScroll() { 
    if((window.pageYOffset - this.spacer._elementRef.nativeElement.offsetTop) >= 0){ 
      this.isSticky = true;
    }else{
      this.isSticky = false;
    }

     
    
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
