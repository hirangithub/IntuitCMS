import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoDataService } from "../services/lo-data.service";


@Component({
  selector: 'app-certification-exam',
  templateUrl: './certification-exam.component.html',
  styleUrls: ['./certification-exam.component.scss']
})

export class CertificationExamComponent implements OnInit {
  
  @ViewChild('spacer') spacer;
  isSticky: boolean = false;
  isStickyVal:any = 0;

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

 @HostListener('window:scroll', ['$event'])
  checkScroll() { 
    if((window.pageYOffset - this.spacer._elementRef.nativeElement.offsetTop) >= 0){ 
      this.isSticky = true;
    }else{
      this.isSticky = false;
    }

     
    
  }

}


