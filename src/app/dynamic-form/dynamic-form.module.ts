import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from './question-control.service';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //thanks to http://stackoverflow.com/a/39152110
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ DynamicFormComponent, DynamicFormQuestionComponent ], //The need to export these components to use them elsewhere was realized thanks to this StackOverflow post: http://stackoverflow.com/a/40254083
  declarations: [ DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap: [ DynamicFormComponent, DynamicFormQuestionComponent ],
  providers: [ QuestionControlService ]
})
export class DynamicFormModule { }
