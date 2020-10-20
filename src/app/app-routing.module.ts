import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'content/:user', loadChildren: () =>
      import('./components/content/content.module').then(m => m.ContentModule)
  },
  { path: '', redirectTo: ``, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
