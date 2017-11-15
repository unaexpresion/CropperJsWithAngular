import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import * as Cropper from 'cropperjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('photo')
  private elPhoto: ElementRef;

  @ViewChild('result')
  private elResult: ElementRef;

  private cropper;
  private result;
  private data;

  ngOnInit() {
    var image = this.elPhoto.nativeElement;
    this.result = this.elResult.nativeElement;

    var croppable = false;
    this.cropper = new Cropper(image, {
      aspectRatio: 1 / 1,
      viewMode: 1,
      autoCrop: false,
      minCropBoxWidth: 100,
      minCropBoxHeight: 100,
      ready: function () {
        croppable = true;
        this.cropper.crop();
        this.cropper.setCropBoxData({
            width: 150,
            height: 150
        });
      }
    });
  }

  makeCrop() {
    var img = this.cropper.getCroppedCanvas({
      width: 250,
      height: 250
    });
    this.data = img.toDataURL();
    this.result.src = this.data;
  }

}
