import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rx-qrcode',
  templateUrl: './rx-qrcode.component.html',
  styleUrls: ['./rx-qrcode.component.scss']
})
export class RxQrcodeComponent implements OnInit {

  title = "angularx-qrcode-sample-app";

  qrdata: string;
  elementType: 'img' | 'url' | 'canvas' | 'svg';
  level: 'L' | 'M' | 'Q' | 'H';
  scale: number;
  width: number;

  constructor() {
    this.elementType = 'img'; // 'canvas', 'svg', 'img', 'url'
    this.level = 'M'; // Nível de Correção
    this.qrdata = 'Initial QR code data string'; // String do Qr Code
    this.scale = 1; // 1 pixel por quadrado preto
    this.width = 256; // Qualquer Valor, vai gerar um quadrado
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
    this.qrdata = newValue.target.value;
  }

  changeScale(newValue: number): void {
    this.scale = newValue;
  }

  changeWidth(newValue: number): void {
    this.width = newValue;
  }
}
