import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThankYouTwoPage } from './thank-you-two.page';

const routes: Routes = [
  {
    path: '',
    component: ThankYouTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThankYouTwoPageRoutingModule {}
