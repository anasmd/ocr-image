import {OcrImageService} from "./ocr-image.service"
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class OcrImage {
  public language: string = "eng";
  public apikey: string;
  public isOverlayRequired: boolean;
  public base64Image: string;
  public results:Object;

  constructor(image: any){
  	this.language = image.language || "eng";
  	this.apikey = "32b903c89588957";
  	this.isOverlayRequired = image.isOverlayRequired || false;
    this.base64Image = image.base64Image;
  }

  save(ocrService: OcrImageService): any{
    return ocrService.processImage(this)
  }

}
