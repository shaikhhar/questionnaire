import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  questionsForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.questionsForm = this.fb.group({
      text: ['', Validators.required],
      type: ['']
    })
  }

}
