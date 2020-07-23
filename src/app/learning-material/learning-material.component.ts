import { Component, OnInit, Input, Output, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { MatFormFieldControl } from '@angular/material/form-field';
import { LearningService } from "../services/learning.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DialogElementsExampleDialog } from "../presentation/presentation.component";
import { LoDataService } from "../services/lo-data.service";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//import { OverlayScrollbarsComponent } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-learning-material',
  templateUrl: './learning-material.component.html',
  styleUrls: ['./learning-material.component.scss']
})
export class LearningMaterialComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public learning: LearningService,
    private data: LoDataService
  ) { }
 
  @ViewChild('spacer') spacer;
  @Output() name: string;
  myCompOneObj: any =  DialogElementsExampleDialog;
 
  selected_LO: any;
  learningContent: any;
  LO_title: string = ""; 
  questions: any; 
  isAddLODialog: boolean = false;
  learningOutComes: any[] = this.learning.getLearningOutcomes();
  learningOutComesTitles : any[] = [];
  isDefaultLODialog: boolean = false;
  isSticky: boolean = false;
  isShowLO: boolean;

  ngOnInit(): void { 
    this.viewLearningOutcomes(0);  

      this.learningOutComes.forEach(element => {
        this.learningOutComesTitles.push(element.lo_title)
      });

      this.data.defaultLODialogCurrentStatus.subscribe(message =>{
        this.isShowLO = message;
      })
      
      if(!this.isShowLO){
        this.showDefaultLODialog();
      }
    
  }

  viewLearningOutcomes(i): void { 
    this.selected_LO = this.learningOutComes[i];  
    this.learningContent =  this.selected_LO.learning_content.data;
    this.questions =  this.selected_LO.questions.data;
    this.isDefaultLODialog = false;
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {  
    if((window.pageYOffset - this.spacer._elementRef.nativeElement.offsetTop) >= 0){ 
      this.isSticky = true;
    }else{
      this.isSticky = false;
    } 
    
  }


  //Lesson Template select
  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }


  //Lesson Edit
  openEditTemplateDialog() {
    const dialogRef = this.dialog.open(EditTempContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }

  //Edit Question
  openQuestionTemplate() {
    const dialogRef = this.dialog.open(EditQuestionTemp);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }

   //Select Question
   openSelectQuestionTemplate() {
    const dialogRef = this.dialog.open(SelectQuestionTemp);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });

  }
  
  //Lesson Edit
  openEditPopup(){
    this.openEditTemplateDialog();
  }


  //Edit Question
  openQuestionPopup(){
    this.openQuestionTemplate();
  }

  openAddLODialog(){
    this.isAddLODialog = true;
    this.isDefaultLODialog = false;
  }

  closeAddLODialog(){
    this.isAddLODialog = false;
    this.isDefaultLODialog = true;
  }

  showDefaultLODialog() {
    this.isAddLODialog = false;
    this.isDefaultLODialog = true;
  }


  createNewLO(): void{
    this.learningOutComesTitles.unshift(this.LO_title);
    this.LO_title = "";
  }

 
}

@Component({
  selector: 'select-template',
  templateUrl: 'select-template.html',
  styleUrls: ['./select-template.scss']
})
 

export class DialogContent implements OnInit{

  constructor(
    public dialog: MatDialog, 
  ) { }

  ngOnInit(): void {  

  }

  openTemplate(){ 
    this.dialog.closeAll();
    const openEditTemp = this.dialog.open(EditTempContent); 
     
  }
}





@Component({
  selector: 'edit-template',
  templateUrl: 'edit-template.html',
  styleUrls: ['./select-template.scss']
})

export class EditTempContent  implements OnInit{ 

  constructor(
    public dialog: MatDialog, 
  ) { }

  ngOnInit(): void {  

  }

  deleteDialog(){
    const openEditTemp = this.dialog.open(DialogElementsExampleDialog); 
  }
} 






@Component({
  selector: 'edit-question',
  templateUrl: 'edit-question.html',
  styleUrls: ['./select-template.scss']
})

export class EditQuestionTemp  implements OnInit{


  constructor(
    public dialog: MatDialog, 
  ) { }

  ngOnInit(): void {  

  }

  deleteDialog(){
   const openEditTemp = this.dialog.open(DialogElementsExampleDialog); 
  }
} 



@Component({
  selector: 'select-question',
  templateUrl: 'select-question.html',
  styleUrls: ['./select-template.scss']
})

export class SelectQuestionTemp  implements OnInit{


  constructor(
    public dialog: MatDialog, 
  ) { }

  ngOnInit(): void {  

  }

  openQuestionTemplate() {
    const dialogRef = this.dialog.open(EditQuestionTemp);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }
  
} 






