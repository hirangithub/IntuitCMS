import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { LearningMaterialComponent, DialogContent, EditTempContent, EditQuestionTemp } from './learning-material/learning-material.component';
import { PresentationComponent } from './presentation/presentation.component';
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
<<<<<<< HEAD
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
=======
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

>>>>>>> 39a977f6ea9d6e93b4c3d0d25f4cf620edcb0612

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
    EditQuestionTemp
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
<<<<<<< HEAD
    FormsModule
    
=======
    MatRippleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule    
>>>>>>> 39a977f6ea9d6e93b4c3d0d25f4cf620edcb0612
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
