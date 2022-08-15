import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IQuestion, QuestionType } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  questionForm: FormGroup;
  questionTypes: QuestionType[] = ['open', 'single', 'multiple'];
  constructor(private fb: FormBuilder, private questionService: QuestionsService, private router: Router) { }

  ngOnInit(): void {
   this.initQuestionForm();
  }

  initQuestionForm () {
    this.questionForm = this.fb.group({
      text: ['', Validators.required],
      type: ['open', Validators.required],
      options: this.fb.array([])
    })
  }

  get questionFormValue() {
   return this.questionForm.value;
  }

  get questionFormControls() {
    return this.questionForm.controls;
  }

  get options() {
    return (this.questionForm.controls['options'] as FormArray);
  }

  get optionForms() {
    return this.options.controls as FormGroup[];
  }

  changeType(type: QuestionType) {
    if (type === 'single' || type === 'multiple') {
      this.resetOptions();
    }
  }

  resetOptions() {
    this.options.clear();
    this.addOption();
    this.addOption();
  }

  addOption () {
    const optionForm = this.fb.group({
      option: ['', Validators.required]
    });
    this.options.push(optionForm);
  }

  createQuestion() {
    this.questionForm.markAllAsTouched();
    if (!this.questionForm.valid) {
      return;
    }
    const question = this.questionForm.value as IQuestion;
    this.questionService.createNewQuestion(question);
    this.router.navigateByUrl('/manage');
  }

}
