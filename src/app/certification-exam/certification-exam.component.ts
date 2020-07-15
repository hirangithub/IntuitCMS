import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-certification-exam',
  templateUrl: './certification-exam.component.html',
  styleUrls: ['./certification-exam.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CertificationExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //panelColor = new FormControl('red');
  selected = 'yes';

}


