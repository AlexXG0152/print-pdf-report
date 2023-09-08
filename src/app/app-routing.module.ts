import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () =>
      import('./modules/short-table/short-table.module').then(
        (m) => m.ShortTableModule
      ),
    data: { preload: true },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/homepage/homepage-routing.module').then(
        (m) => m.HomepageRoutingModule
      ),
    data: { preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
