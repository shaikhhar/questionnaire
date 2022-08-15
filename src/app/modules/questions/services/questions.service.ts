import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';
 
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: IQuestion[];

  constructor() { 
    this.questions = (JSON.parse(localStorage.getItem('questions')))  || [];
  }

  saveQuestionsLocal() {
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  getQuestions(): IQuestion[] {
    return this.questions;
  }
  
  createNewQuestion(question: IQuestion) {
    const id = Math.max(...this.questions.map(q => q.id)) + 1;
    const newQuestion = {...question, id, answer: null};
    this.questions = [newQuestion, ...this.questions];
    this.saveQuestionsLocal();
  }

  answerQuestion(questionId: number, answer: string | number | number[]) {
    const question = this.getQuestionById(questionId);
    question.answer = answer;
    question.answerDate = Date.now().toString();
    this.updateQuestionById(questionId, question);
  }

  getQuestionById(id: number): IQuestion {
    return this.questions.find(q => q.id === id);
  }

  updateQuestionById(id: number, question: Partial<IQuestion>) {
    const updatedQuestion = {...this.getQuestionById(id), ...question};
    const questionIndex = this.questions.findIndex(q => q.id === id);
    this.questions[questionIndex] = updatedQuestion;
    this.saveQuestionsLocal();
  }

  removeQuestionById(id: number) {
    this.questions = this.questions.filter(q => q.id !== id);
    this.saveQuestionsLocal();
  }
}
