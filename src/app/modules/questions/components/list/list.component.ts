import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  unansweredQuestions: IQuestion[];
  answeredQuestions: IQuestion[];

  text;
  selectedOption;
  checkedOptions = [];
  activeQuestionId: number;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.initQuestions();
  }

  initQuestions() {
    const questions = this.questionsService.getQuestions();
    this.unansweredQuestions = questions.filter(q => !q.answer);
    this.answeredQuestions = questions.filter(q => q.answer).sort((a, b) => parseInt(b.answerDate) - parseInt(a.answerDate));
  }

  answer(id: number, answer: string | number | number[]) {
    this.questionsService.answerQuestion(id, answer);
    this.initQuestions();

  }

  activateQuestion(id: number) {
    this.activeQuestionId = id;
  }

  toggleCheckedOption(questionId: number, optionId: number) {
    if (questionId !== this.activeQuestionId) {
      this.checkedOptions = [];
    }
    this.activateQuestion(questionId);
    const checked = this.checkedOptions.find(co => co === optionId);
    if (checked) {
      this.checkedOptions = this.checkedOptions.filter(co => co !==optionId)
    } else {
      this.checkedOptions = [...this.checkedOptions, optionId];
    }
  }

  isIndexChecked(questionId: number, index: number) {
    return  ( this.answeredQuestions.find(q => q.id === questionId).answer as number[]).includes(index);
  }

  changeSelectedOption(questionId: number, optionId:number) {
    if (questionId !== this.activeQuestionId) {
      this.selectedOption = undefined;
    }
    this.activateQuestion(questionId);
    this.selectedOption = optionId;
  }
}
