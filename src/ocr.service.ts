import { Injectable } from '@nestjs/common';
import * as Tesseract from 'tesseract.js';

@Injectable()
export class OcrService {
  async recognize(textBuffer: Buffer): Promise<string> {
    const result = await Tesseract.recognize(textBuffer, 'eng');
    return result.data.text;
  }
}
