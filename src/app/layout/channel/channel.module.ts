import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChannelRoutingModule } from './channel-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    ChannelRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListComponent,
    AddComponent
  ]
})
export class ChannelModule { }
