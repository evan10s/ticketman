import { Injectable } from '@angular/core';
import { QuestionBase }     from '../dynamic-form/question-base';
import { TextboxQuestion }  from '../dynamic-form/textbox-question';

@Injectable()
export class AddEventQuestionService {
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key:'eventName',
        label: 'Event name',
        value: '',
        required: true,
        order: 1,
        type:"text",
        placeholder: "Official event name"
      }),
      new TextboxQuestion({
        key:'startDate',
        label: 'Start date',
        value: '',
        required: true,
        order: 2,
        type:"text",
        placeholder: "mm/dd/yyyy hh:mm AM/PM"
      }),
      new TextboxQuestion({
        key:'endDate',
        label: 'End date',
        value: '',
        required: true,
        order: 3,
        type:"text",
        placeholder: "mm/dd/yyyy hh:mm AM/PM"
      }),
      new TextboxQuestion({
        key:'host',
        label: 'Host',
        value: '',
        required: true,
        order: 4,
        type:"text",
        placeholder: 'Name of entity hosting event'
      })
    ]
    return questions;
  }

  constructor() { }

}
