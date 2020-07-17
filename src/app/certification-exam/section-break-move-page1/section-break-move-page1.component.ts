import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoDataService } from "../../services/lo-data.service";

@Component({
  selector: 'app-section-break-move-page1',
  templateUrl: './section-break-move-page1.component.html',
  styleUrls: ['../certification-exam.component.scss']
})
export class SectionBreakMovePage1Component implements OnInit {

  @ViewChild('spacer') spacer; 

  isSticky: boolean = false;
  isStickyVal:any = 0;
  isMoveLO: boolean = true; 
  selectedCount: number = 0;


  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  selected = 'yes';
  
  
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

  moveLO(){
    this.isMoveLO = true;  
  }
  

  onSelection(e){
    
    (e.option._selected)? this.selectedCount++ : this.selectedCount-- ;
    console.log(this.selectedCount)
  }

  goBack(){
    window.history.back();
  }

}
