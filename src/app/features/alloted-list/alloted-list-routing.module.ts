import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllotedListPage } from './alloted-list.page';

const routes: Routes = [
  {
    path: '',
    component: AllotedListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllotedListPageRoutingModule {}
