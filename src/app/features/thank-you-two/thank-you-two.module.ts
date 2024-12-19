import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThankYouTwoPageRoutingModule } from './thank-you-two-routing.module';

import { ThankYouTwoPage } from './thank-you-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThankYouTwoPageRoutingModule
  ],
  declarations: [ThankYouTwoPage]
})
export class ThankYouTwoPageModule {}
