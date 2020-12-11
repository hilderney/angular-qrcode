import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {
  elementType = 'url';
  valor = 'https://assets.econsultancy.com/images/resized/0002/4236/qr_code-blog-third.png';

 @ViewChild('result')
  resultElement!: ElementRef;

  showQRCode : boolean = true;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  render(e: any){
    console.log(e.result);
    let element :Element = this.renderer.createElement('p');
    element.innerHTML = e.result;
    this.renderElement(element);
  }

  renderElement(element: any){
    for (let node of this.resultElement.nativeElement.childNodes) {
              this.renderer.removeChild(this.resultElement.nativeElement, node);
    }
    this.renderer.appendChild(this.resultElement.nativeElement, element);
  }

}
