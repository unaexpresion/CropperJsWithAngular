/*import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Renderer2 } from '@angular/core';

import { NumberComponent } from './child.component';

import * as Cropper from 'cropperjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  
  @ViewChild(NumberComponent)
  private numberComponent: NumberComponent;

  @ViewChild('title')
  private elTitle: ElementRef;

  @ViewChild('photo')
  private elPhoto: ElementRef;

  @ViewChild('button')
  private elButton: ElementRef;

  @ViewChild('result')
  private elResult: ElementRef;

  private cropper;

  constructor(private renderer: Renderer2) {}

  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }

  ngAfterViewInit() {
    console.log(this.elPhoto.nativeElement);
    this.elTitle.nativeElement.style.color = 'red';
    this.elPhoto.nativeElement.style.width = '600px';
  }

  crop() {
    alert("a")
    var image = this.elPhoto.nativeElement;
    var button = this.elButton.nativeElement;
    var result = this.elResult.nativeElement;
    var croppable = false;

    /*var cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      ready: function () {
        croppable = true;
      }
    });
    
    var croppedCanvas;
    var roundedCanvas;
    var roundedImage;
    /*if (!croppable) {
      return;
    }
    // Crop
    croppedCanvas = this.cropper.getCroppedCanvas();
    console.log(croppedCanvas);
    // Round
    roundedCanvas = this.getRoundedCanvas(croppedCanvas);
    // Show
    roundedImage = this.renderer.createElement('img');
    roundedImage.src = roundedCanvas.toDataURL();
    console.log('roundedImage', roundedImage);
    result.innerHTML = '';
    result.appendChild(roundedImage);
  }

  getRoundedCanvas(sourceCanvas) {
    var canvas = this.renderer.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
  }

  ngOnInit() {
    var image = this.elPhoto.nativeElement;
    var croppable = false;
    this.cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      viewMode: 2,
      ready: function () {
        croppable = true;
      }
    });
  }

}
*/