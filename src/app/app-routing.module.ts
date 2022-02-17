import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'competitions',
    loadChildren: () =>
      import('./competitions/competitions.module').then(
        (m) => m.CompetitionsPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'competitions',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
