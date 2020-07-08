import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 

@Component({
  selector: 'app-learning-material',
  templateUrl: './learning-material.component.html',
  styleUrls: ['./learning-material.component.scss']
})
export class LearningMaterialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  typesOfShoes: string[] = ['LO 1', 'LO 2', 'LO 3', 'LO 4', 'LO 5'];


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

  ngOnInit(): void { }


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






@Component({
  selector: 'edit-question',
  templateUrl: 'edit-question.html',
  styleUrls: ['./select-template.scss']
})

export class EditQuestionTemp {} 