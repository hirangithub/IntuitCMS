import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningMaterialComponent } from './learning-material/learning-material.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CertificationExamComponent } from './certification-exam/certification-exam.component';


const routes: Routes = [
  { path: 'learning-materials', component: LearningMaterialComponent },
  { path: 'presntation', component: PresentationComponent },
  { path: 'certification-exam', component: CertificationExamComponent },
  { path: '',   redirectTo: '/learning-materials', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
