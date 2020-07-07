import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import {MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-learning-material',
  templateUrl: './learning-material.component.html',
  styleUrls: ['./learning-material.component.scss']
})
export class LearningMaterialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  typesOfShoes: string[] = ['LO 1', 'LO 2', 'LO 3', 'LO 4', 'LO 5'];


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

  ngOnInit(): void { 
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