import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rx-qrcode',
  templateUrl: './rx-qrcode.component.html',
  styleUrls: ['./rx-qrcode.component.scss']
})
export class RxQrcodeComponent implements OnInit {

  title = "angularx-qrcode-sample-app";

  qrdata = 'asd';
  elementType: 'img' | 'url' | 'canvas' | 'svg';
  level: 'L' | 'M' | 'Q' | 'H';
  scale: number;
  width: number;

  constructor() {
    this.elementType = 'img';
    this.level = 'M';
    this.qrdata = 'Initial QR code data string';
    this.scale = 1;
    this.width = 256;
  }

  ngOnInit() {
  }

  changeElementType(newValue: 'img' | 'url' | 'canvas' | 'svg'): void {
    this.elementType = newValue;
  }

  changeLevel(newValue: 'L' | 'M' | 'Q' | 'H'): void {
    this.level = newValue;
  }

  changeQrdata(newValue: string): void {
    this.qrdata = newValue;
  }

  changeCustomQrdata(newValue: any): void {
    this.qrdata = newValue;
  }

  changeScale(newValue: number): void {
    this.scale = newValue;
  }

  changeWidth(newValue: number): void {
    this.width = newValue;
  }
}
