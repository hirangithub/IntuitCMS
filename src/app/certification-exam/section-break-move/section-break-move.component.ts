import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoDataService } from "../../services/lo-data.service";

@Component({
  selector: 'app-section-break-move',
  templateUrl: './section-break-move.component.html',
  styleUrls: ['../certification-exam.component.scss']
})
export class SectionBreakMoveComponent implements OnInit {

  @ViewChild('spacer') spacer; 

  isSticky: boolean = false;
  isStickyVal:any = 0;
  isMoveLO: boolean = true; 
  selectedCount: number = 0;

  section1:any = [
    { title: "Establish a potential client's QuickBooks Online and QuickBooks Self-Employed needs", isSelected: false, value: "s-1-0", }
  ]

  section2:any = [
    { title: "Recognize how to create bank feeds to QuickBooks Online", isSelected: false, value: "s-2-0", },
    { title: "Establish a potential client's QuickBooks Online and QuickBooks Self-Employed needs", isSelected: false, value: "s-2-1" }
  ]


  section3:any = [
    { title: "Recognize the main features of QuickBooks Online Accountant and how to access clients’ QuickBooks Online and the Accountant Tools", isSelected: false, value: "s-3-0" },
    { title: "Module One Review - Getting started in QuickBooks Online Accountant", isSelected: false, value: "s-3-1" }
  ]




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

    let index = e.option._value.split("-");
    let sectionIndex = parseInt(index[2]);
    let selectedSection = parseInt(index[1]);

    if(e.option._selected){
      this.selectedCount++;
      this.selectOptions(sectionIndex, selectedSection )
    }else{
      this.selectedCount--;
      this.unselectOptions(sectionIndex, selectedSection )
    }

    

  
    
  }

  selectOptions(sectionIndex, caseIndex){
    switch (caseIndex) {
      case 1:
        this.section1[sectionIndex].isSelected = true;
        break;
        
        case 2:
          this.section2[sectionIndex].isSelected = true;
          break;
        
        case 3:
          this.section3[sectionIndex].isSelected = true;
          break;
    
        default:
          break;
    }
  }

  unselectOptions(sectionIndex, caseIndex){
    switch (caseIndex) {
      case 1:
        this.section1[sectionIndex].isSelected = false;
        break;
        
        case 2:
          this.section2[sectionIndex].isSelected = false;
          break;
        
        case 3:
          this.section3[sectionIndex].isSelected = false;
          break;
    
        default:
          break;
    }
  }

  goBack(){
    window.history.back();
  }
 

}

 
