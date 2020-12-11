import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'qrcode',
    loadChildren: () => import('./components/qrcode/qrcode.module').then(m => m.QrcodeModule)
  },
  {
    path: 'rxqrcode',
    loadChildren: () => import('./components/rx-qrcode/rx-qrcode.module').then(m => m.RxQrcodeModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
