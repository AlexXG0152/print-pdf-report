import { Component, ElementRef, ViewChild } from '@angular/core';
declare var require: any;

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
const htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss'],
})
export class FullPageComponent {
  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;

  public exportPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = {
      content: html,
    };
    pdfMake.createPdf(documentDefinition).download();
  }
}
