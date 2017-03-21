import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions }       from '@angular/http';

@Injectable()
export class OcrImageService {
  private serviceUrl = "https://api.ocr.space/parse/image";

  constructor(private http: Http){
  }

  processImage(data: any){

    let formData = new FormData();
    formData.append("apikey", data.apikey);
    formData.append("base64Image", data.base64Image);
    formData.append("language", data.language);
    return this.http.post(this.serviceUrl, formData);


  }
}
