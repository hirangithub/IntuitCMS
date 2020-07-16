import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CMS-V2';

  tabList: any = [
    {label: "Learning Material", route: "learning-materials" },
    {label: "Presentation", route: "presntation" },
    {label: "Certification Exam", route: "certification-exam" },
  ]

  constructor(public router: Router){

  }

  ngOnInit(){
    
  }

 
  navigateToTab(event){  
    let selectedRoute = this.tabList[event.index].route
    this.router.navigate(['/'+selectedRoute]);
  }


}
