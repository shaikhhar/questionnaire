import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuestion } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  questions: IQuestion[] = [];

  constructor(private questionService: QuestionsService, private router: Router) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

  remove(i: number) {
    this.questionService.removeQuestionById(i);
    this.questions = this.questionService.getQuestions();
  }

}
