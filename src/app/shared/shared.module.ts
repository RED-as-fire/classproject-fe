import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbInputModule, NbToggleModule } from '@nebular/theme';
import { NebularTableComponent } from './nebular-table/nebular-table.component';




@NgModule({
  declarations: [NebularTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbToggleModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
  exports:[
    NbToggleModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NebularTableComponent
  ]
})
export class SharedModule { }
