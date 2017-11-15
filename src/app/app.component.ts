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

  @ViewChild('inputFile')
  private elInputFile: ElementRef;

  private cropper;
  private result;
  private data;
  private options;
  private image;

  ngOnInit() {
    this.image = this.elPhoto.nativeElement;
    this.result = this.elResult.nativeElement;

    this.options = {
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
    };

    var croppable = false;
    this.cropper = new Cropper(this.image, this.options);
  }

  makeCrop() {
    var img = this.cropper.getCroppedCanvas({
      width: 250,
      height: 250
    });
    this.data = img.toDataURL();
    this.result.src = this.data;
  }

  changeImage(event) {
    var files = event.srcElement.files;
    var file;

    var uploadedImageType = 'image/jpeg';
    var uploadedImageURL;
    var URL = window.URL || (window as any).webkitURL;

    if (files && files.length) {
      file = files[0];

      if (/^image\/\w+/.test(file.type)) {
        uploadedImageType = file.type;
        if (uploadedImageURL) {
          URL.revokeObjectURL(uploadedImageURL);
        }
        this.image.src = uploadedImageURL = URL.createObjectURL(file);
        this.cropper.destroy();
        this.cropper = new Cropper(this.image, this.options);
      } else {
        window.alert('Please choose an image file.');
        this.elInputFile.nativeElement.value = '';
      }
    }
  }

}
