import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-learning-material',
  templateUrl: './learning-material.component.html',
  styleUrls: ['./learning-material.component.scss']
})
export class LearningMaterialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  typesOfShoes: string[] = ['LO 1', 'LO 2', 'LO 3', 'LO 4', 'LO 5'];

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }

  ngOnInit(): void { 
  }

}

@Component({
  selector: 'select-template',
  templateUrl: 'select-template.html',
  styleUrls: ['./select-template.scss']
})

export class DialogContent {}