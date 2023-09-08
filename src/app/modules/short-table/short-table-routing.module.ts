import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInputComponent } from './components/data-input/data-input.component';
import { FullPageComponent } from './components/full-page/full-page.component';

const routes: Routes = [
  {
    path: 'aa6sd67897dsf78gf98lf234s$df2GsdfsdjOGfsFDG2sfsGsdGFfsdfdf34df234$lf234s$df2GsdfsdjOGfsFDG2sfsGsdGFfsdfdf34df234$',
    component: FullPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortTableRoutingModule {}
