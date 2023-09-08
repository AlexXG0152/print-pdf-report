import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortTableRoutingModule } from './short-table-routing.module';
import { DataInputComponent } from './components/data-input/data-input.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullPageComponent } from './components/full-page/full-page.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [DataInputComponent, DataTableComponent, FullPageComponent, HelpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShortTableRoutingModule,
  ],
})
export class ShortTableModule {}
