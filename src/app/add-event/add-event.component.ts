import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from '../dynamic-form/question-control.service';
import { AddEventQuestionService } from './add-event-question.service';
import { QuestionBase } from '../dynamic-form/question-base';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styles: [],
  providers: [ AddEventQuestionService ]
})
export class AddEventComponent implements OnInit {
  questions: QuestionBase<any>[] = this.addEventService.getQuestions();

  constructor(private addEventService: AddEventQuestionService) {

  }

  ngOnInit() {
  }

  createForm() {

  }

}
