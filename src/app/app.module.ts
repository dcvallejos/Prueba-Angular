import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { StudyCardComponent } from './Components/study-card/study-card.component';
import { ExpCardComponent } from './Components/exp-card/exp-card.component';
import { PersonCardComponent } from './Components/person-card/person-card.component';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddExpComponent } from './Components/add-exp/add-exp.component';
import { ExpComponent } from './Components/exp/exp.component';
import { AddExpButtonComponent } from './Components/add-exp-button/add-exp-button.component';
import{ FormsModule } from '@angular/forms';
import { EditExpButtonComponent } from './Components/edit-exp-button/edit-exp-button.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StudyCardComponent,
    ExpCardComponent,
    PersonCardComponent,
    AddExpComponent,
    ExpComponent,
    AddExpButtonComponent,
    EditExpButtonComponent
       
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
