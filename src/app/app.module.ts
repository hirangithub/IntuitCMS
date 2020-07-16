import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { LearningMaterialComponent, DialogContent, EditTempContent, EditQuestionTemp, SelectQuestionTemp } from './learning-material/learning-material.component';
import { PresentationComponent, CPEDialog, CopyurlDialog, viewLODialog, DialogElementsExampleDialog } from './presentation/presentation.component';
import { CertificationExamComponent } from './certification-exam/certification-exam.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SectionListComponent, viewLODialog2 } from './certification-exam/section-list/section-list.component';
import { SectionBreakPage1Component, viewLODialog3 } from './certification-exam/section-break-page1/section-break-page1.component';
import { SectionBreakPage2Component, viewLODialog4 } from './certification-exam/section-break-page2/section-break-page2.component';

import { AngularStickyThingsModule } from '@w11k/angular-sticky-things'; 


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    LearningMaterialComponent,
    PresentationComponent,
    CertificationExamComponent,
    DialogContent, 
    EditTempContent, 
    EditQuestionTemp,
    CPEDialog,
    CopyurlDialog,
    viewLODialog,
    viewLODialog2,
    viewLODialog3,
    viewLODialog4,
    DialogElementsExampleDialog,
    SelectQuestionTemp,
    SectionListComponent,
    SectionBreakPage1Component,
    SectionBreakPage2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule, 
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    FlexLayoutModule, 
    MatFormFieldModule,
    MatChipsModule,
    MatRippleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule, 
    FormsModule,
    DragDropModule, 
    MatTooltipModule,
    AngularStickyThingsModule
  ],
  exports: [DialogContent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
