
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContentModule { }