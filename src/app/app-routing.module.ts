import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () =>
      import('./modules/questions/components/manage/manage.module').then((m) => m.ManageModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/questions/components/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./modules/questions/components/create/create.module').then((m) => m.CreateModule),
  },
  {
    path: 'edit',
    loadChildren: () => import('./modules/questions/components/edit/edit.module').then((m) => m.EditModule),
  },
  {
    path: '**',
    redirectTo: 'manage',
  },
  { path: '', pathMatch: 'full', redirectTo: 'manage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
