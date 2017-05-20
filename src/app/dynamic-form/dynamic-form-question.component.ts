//from (some modifications have been made) Angular docs Dynamic Form cookbook: https://angular.io/docs/ts/latest/cookbook/dynamic-form.html

import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from './question-base';
@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styles: [`
      div.form-group {
        
      }
    `]
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
