import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
  },
];

@NgModule({
  declarations: [CreateComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule],
})
export class CreateModule {}
