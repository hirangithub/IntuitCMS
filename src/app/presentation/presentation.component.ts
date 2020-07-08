import { Component, OnInit } from '@angular/core';
import { PresentationService } from "../services/presentation.service";
import { MatDialog } from '@angular/material/dialog';

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

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
    console.log('aaa');
  }

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
  

}

@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
})
export class DialogElementsExampleDialog {}
