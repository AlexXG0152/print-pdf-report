import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInputComponent } from './components/data-input/data-input.component';
import { FullPageComponent } from './components/full-page/full-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FullPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortTableRoutingModule {}
