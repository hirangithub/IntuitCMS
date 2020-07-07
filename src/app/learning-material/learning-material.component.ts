import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { MatFormFieldControl } from '@angular/material/form-field';
import { LearningService } from "../services/learning.service";

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
 
  selected_LO: any;
  learningContent: any;
  questions: any; 
  learningOutComes: any[] = this.learning.getLearningOutcomes();
  
  ngOnInit(): void { 
    this.viewLearningOutcomes(0);
  }

  viewLearningOutcomes(i): void { 
    this.selected_LO = this.learningOutComes[i];  
    this.learningContent =  this.selected_LO.learning_content.data;
    this.questions =  this.selected_LO.questions.data;
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }


  openEditTemplateDialog() {
    const dialogRef = this.dialog.open(EditTempContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }
 
  openEditPopup(){
    this.openEditTemplateDialog();
  }
}

@Component({
  selector: 'select-template',
  templateUrl: 'select-template.html',
  styleUrls: ['./select-template.scss']
})
 

export class DialogContent {}


@Component({
  selector: 'edit-template',
  templateUrl: 'edit-template.html',
  styleUrls: ['./select-template.scss']
})

export class EditTempContent {} 