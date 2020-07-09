import { Component, OnInit } from '@angular/core';
import { PresentationService } from "../services/presentation.service";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContent } from "../learning-material/learning-material.component";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  bundleList: any = this.presentation.getBundles();
  selectedBundle: any;
  selectedLessonsList: any
  panelOpenState = false;
  isAddBundlesDialog: boolean = false;
  isAddLessonsDialog: boolean = false;
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


