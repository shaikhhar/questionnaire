import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
  },
];

@NgModule({
  declarations: [CreateComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class CreateModule {}
