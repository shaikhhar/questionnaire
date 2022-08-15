import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuestion, QuestionType } from '../../interfaces/question.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  question: IQuestion;
  questionForm: FormGroup;
  questionTypes: QuestionType[] = ['open', 'single', 'multiple'];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private questionsService: QuestionsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.params.id);
    this.question = this.questionsService.getQuestionById(id);
    this.initQuestionForm();
  }

  initQuestionForm () {
    this.questionForm = this.fb.group({
      text: [this.question.text, Validators.required],
      type: [this.question.type, Validators.required],
      options: this.fb.array([])
    })
    if (this.question.type === 'single' || this.question.type === 'multiple') {
      this.question.options.forEach( option => {
        this.options.push(this.fb.group({
          option: [option.option, Validators.required]
        }));
      })
    }
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
 
   update() {
     this.questionForm.markAllAsTouched();
     if (!this.questionForm.valid) {
       return;
     }
     const question = this.questionForm.value as IQuestion;
     this.questionsService.updateQuestionById(this.question.id, question);
     this.router.navigateByUrl('/manage');
   }

}
