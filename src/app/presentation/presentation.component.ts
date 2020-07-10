import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { PresentationService } from "../services/presentation.service";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContent } from "../learning-material/learning-material.component";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PresentationComponent implements OnInit {

  @ViewChild('add') addElement: ElementRef;
  bundleList: any = this.presentation.getBundles();
  selectedBundle: any;
  selectedLessonsList: any
  panelOpenState = false;
  isAddBundlesDialog: boolean = false;
  isAddLessonsDialog: boolean = false;
  isAddLessonsBox: boolean = false;
  bundleListTitles : any[] = [];
  Bundle_title: string = ""; 
  newLessonsBundleTitle: string = ""; 
  
  constructor( 
    public presentation: PresentationService,
    public dialog: MatDialog
  ) { }



  ngOnInit(): void {
   
    this.viewLearningOutcomes(0);

    this.bundleList.forEach(element => {
      this.bundleListTitles.push(element.title); 
    });
    
  }  

  viewLearningOutcomes(i): void { 
    this.selectedBundle = this.bundleList[i];   
    this.selectedLessonsList = this.selectedBundle.lessons;
  }


  isShow= false; 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  openAddBundlesDialog(){ 
    this.isAddLessonsDialog  = false
    this.isAddBundlesDialog = true;
  }

  closeAddBundlesDialog(){
    this.isAddBundlesDialog = !this.isAddBundlesDialog;
  }

  createNewBundle(): void{
    this.bundleListTitles.unshift(this.Bundle_title);
    this.newLessonsBundleTitle = this.Bundle_title;
    this.Bundle_title = ""; 
    this.closeAddBundlesDialog();
    this.isAddLessonsDialog = true;
  }

  closeAddLessonsBundlesDialog(){
    this.isAddLessonsDialog  = false
    this.isAddBundlesDialog = false;
  }

  openContentTemplate(){
    this.dialog.open(DialogContent);
  }


  openDialog(): void {
    this.dialog.open(DialogElementsExampleDialog);
    // const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
      
    // });    
  }  

  openCPE(){ 
    this.dialog.open(CPEDialog);
  }

  openCopyUrl(){ 
    this.dialog.open(CopyurlDialog);
  }
  

  openAddLessonsBox(){
    
    this.isAddLessonsBox = true;

    setTimeout(()=>{  
      this.addElement.nativeElement.focus();
    },0);
  }

  closeAddLessonsBox(){
    this.isAddLessonsBox = false;
  }

  ViewLO(){
    this.dialog.open(viewLODialog);

  }
  
}


@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
})
export class DialogElementsExampleDialog {
     
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-cpe',
  templateUrl: 'config-cpe.html',
  styleUrls: ['../learning-material/select-template.scss']
})
export class CPEDialog {
     
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-copy-url',
  templateUrl: 'copy-url.html',
})
export class CopyurlDialog {
     
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'view-lo',
  templateUrl: 'view-lo.html',
  styleUrls: ['./presentation.component.scss']

})
export class viewLODialog {
     
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}





