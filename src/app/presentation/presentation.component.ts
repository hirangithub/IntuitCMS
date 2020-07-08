import { Component, OnInit } from '@angular/core';
import { PresentationService } from "../services/presentation.service";

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

  constructor( 
    public presentation: PresentationService
  ) { }

  ngOnInit(): void {
    console.log(this.bundleList)
    this.viewLearningOutcomes(0);
    
  }  

  viewLearningOutcomes(i): void { 
    this.selectedBundle = this.bundleList[i];   
    this.selectedLessonsList = this.selectedBundle.lessons;
  }


  isShow= false; 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  

}

