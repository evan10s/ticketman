import { TestBed, inject } from '@angular/core/testing';

import { AddEventQuestionService } from './add-event-question.service';

describe('AddEventQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEventQuestionService]
    });
  });

  it('should ...', inject([AddEventQuestionService], (service: AddEventQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
