import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrcodeComponent } from './qrcode.component';
import { QrcodeRoutes } from './qrcode.routing';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    QrcodeRoutes,
    NgQRCodeReaderModule,
    FormsModule,
  ],
  declarations: [QrcodeComponent]
})
export class QrcodeModule { }
