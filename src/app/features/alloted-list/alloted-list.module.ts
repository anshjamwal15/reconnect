import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllotedListPageRoutingModule } from './alloted-list-routing.module';

import { AllotedListPage } from './alloted-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllotedListPageRoutingModule
  ],
  declarations: [AllotedListPage]
})
export class AllotedListPageModule {}
