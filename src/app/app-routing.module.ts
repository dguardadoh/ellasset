import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'setup', pathMatch: 'full'},
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'import-from-seed',
    loadChildren: () => import('./setup/import-from-seed/import-from-seed.module').then( m => m.ImportFromSeedPageModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./setup/new-account/new-wallet.module').then( m => m.NewAccountPageModule)
  },
  {
    path: 'done',
    loadChildren: () => import('./setup/done/done.module').then( m => m.DonePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
