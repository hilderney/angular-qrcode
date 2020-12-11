import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxQrcodeComponent } from './rx-qrcode.component';
import { RxQrcodeRoutes } from './rx-qrcode.routing';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    RxQrcodeRoutes,
    QRCodeModule
  ],
  declarations: [RxQrcodeComponent]
})
export class RxQrcodeModule { }
