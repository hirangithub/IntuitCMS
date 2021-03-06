import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningMaterialComponent } from './learning-material/learning-material.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CertificationExamComponent } from './certification-exam/certification-exam.component';
import { SectionListComponent } from './certification-exam/section-list/section-list.component';
import { SectionBreakPage1Component } from './certification-exam/section-break-page1/section-break-page1.component';
import { SectionBreakPage2Component } from './certification-exam/section-break-page2/section-break-page2.component';
import { SectionBreakMoveComponent } from './certification-exam/section-break-move/section-break-move.component';
import { SectionBreakMovePage1Component } from './certification-exam/section-break-move-page1/section-break-move-page1.component';


const routes: Routes = [
  { path: 'learning-materials', component: LearningMaterialComponent },
  { path: 'presntation', component: PresentationComponent },
  { path: 'certification-exam', component: CertificationExamComponent,
    children: [ 
      { path: '', component: SectionListComponent }, 
      { path: 'section-break-page1', component: SectionBreakPage1Component }, 
      { path: 'section-break-page2', component: SectionBreakPage2Component }, 
      { path: 'section-break-move', component: SectionBreakMoveComponent }, 
      { path: 'section-break-move-page1', component: SectionBreakMovePage1Component }, 
      
    ]
  },
  { path: '',   redirectTo: '/learning-materials', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
