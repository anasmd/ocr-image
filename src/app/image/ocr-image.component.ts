import { Component } from '@angular/core';
import { OcrImage } from './ocr-image';
import { OcrImageService } from './ocr-image.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  moduleId: module.id,
  selector: 'ocr-image-form',
  templateUrl: './ocr-image-form.component.html'
})

export class OcrImageComponent {



	image: OcrImage;
  file:File;
  base64Data: Array<String>;
  languages: any;
  results: any;
  loading: boolean=false;

  constructor(private ocrService: OcrImageService){
    this.languages = [ {name: "Chinese", value: "chs"},
                       {name: "Danish", value: "dan" },
                       {name: "Dutch", value: "dut"},
                       {name: "English", value: "eng"},
                       {name:"Finnish", value: "fin"} ];


  }

  processFile(e):void {
    var dataObj = [];
    console.log("reached");
    this.file = e.target.files[0];
    var reader  = new FileReader();
    reader.onload = function(e) {
      let data = reader.result;
      document.getElementById("TheImageContents").innerHTML = '<h2>The image that you selected</h2><p><img width="200" src="'+data+'" /></p>';
      //data = data.replace('data:image/png;base64,', '');
      dataObj.push(data) ;
		}

    reader.readAsDataURL(this.file);
    this.base64Data = dataObj;
	}

	submit(image):void {
    this.loading = true;
    image.base64Image = this.base64Data[0];
    console.log(image);
	  this.image = new OcrImage(image);
	  this.image.save(this.ocrService)
    .map(response => response.json())
    .subscribe((response) => {
      this.results = response.ParsedResults[0];
      this.loading = false;
      return this.results;
    }
    );

	}

}
