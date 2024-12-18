import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-photo',
    loadChildren: () => import('./features/add-photo/add-photo.module').then( m => m.AddPhotoPageModule)
  },
  {
    path: 'create-profile',
    loadChildren: () => import('./features/create-profile/create-profile.module').then( m => m.CreateProfilePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./features/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./features/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./features/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'alloted-list',
    loadChildren: () => import('./features/alloted-list/alloted-list.module').then( m => m.AllotedListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
