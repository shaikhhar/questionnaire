import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'management',
    loadChildren: () =>
      import('./management/manage.module').then((m) => m.ManageModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./create/create.module').then((m) => m.CreateModule),
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule),
  },
  {
    path: '**',
    redirectTo: 'management',
  },
  { path: '', pathMatch: 'full', redirectTo: 'management' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
