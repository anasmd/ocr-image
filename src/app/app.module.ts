import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OcrImageService } from './image/ocr-image.service'
import { OcrImageComponent } from './image/ocr-image.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    OcrImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OcrImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
