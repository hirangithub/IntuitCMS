import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { MatFormFieldControl } from '@angular/material/form-field';
import { LearningService } from "../services/learning.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DialogElementsExampleDialog } from "../presentation/presentation.component";


@Component({
  selector: 'app-learning-material',
  templateUrl: './learning-material.component.html',
  styleUrls: ['./learning-material.component.scss']
})
export class LearningMaterialComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public learning: LearningService
  ) { }

  myCompOneObj: any =  DialogElementsExampleDialog;
 
  selected_LO: any;
  learningContent: any;
  LO_title: string = ""; 
  questions: any; 
  isAddLODialog: boolean = false;
  learningOutComes: any[] = this.learning.getLearningOutcomes();
  learningOutComesTitles : any[] = []

  ngOnInit(): void { 
    this.viewLearningOutcomes(0);  

      this.learningOutComes.forEach(element => {
        this.learningOutComesTitles.push(element.lo_title)
      });
  }

  viewLearningOutcomes(i): void { 
    this.selected_LO = this.learningOutComes[i];  
    this.learningContent =  this.selected_LO.learning_content.data;
    this.questions =  this.selected_LO.questions.data;
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
  }

  closeAddLODialog(){
    this.isAddLODialog = false;
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






