//The code used to create the dynamic form is based on (or identical to, as of May 19, 2017) on the Dynamic Forms cookbook found on the Angular.io website
//The URL for this is https://angular.io/docs/ts/latest/cookbook/dynamic-form.html

import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
