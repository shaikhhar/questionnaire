import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: EditComponent,
  },
];

@NgModule({
  declarations: [EditComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class EditModule {}
