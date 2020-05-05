import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
/* tslint:disable */
@Component({
  selector: 'tn-curved-line-arrow',
  template: `
  <canvas #myCanvas ></canvas>
  `,
  styles: []
})
export class CurvedLineArrowComponent implements OnInit {


  @Input() fromSelector : string = 'body'
  @Input() toSelector : string = this.fromSelector;
  @Input() fromOffsetX :number =  0;
  @Input() fromOffsetY :number =  0;
  @Input() toOffsetX :number =  0;
  @Input() toOffsetY :number =  0;
  @Input() middleX :number =  0;
  @Input() middleY :number =  40;
  @Input() width  :number = 8;
  @Input() color : string = 'black';
  @Input() hideIfFoundSelector : string ;
  @Input() debugLine :boolean = false;
  @Input() dynamicUpdate = false;
  @Input() zIndex :number =  0;
  @ViewChild('myCanvas') myCanvas: ElementRef;


  ngOnInit() {
    this.render();

  }
   quadraticCurveMinMax(p0, p1, p2) {
    let min = p0;
    let max = p2;
    const t_step = 0.0001;
    for (let t = t_step; t <= 1; t += t_step) {
      const f = (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
      if (f < min) { min = f; }
      if (f > max) { max = f; }
    }
    return [Math.round(min), Math.round(max)];
  }
  render() {

    const fromElement = document.querySelector(this.fromSelector);
    const toElement = document.querySelector(this.toSelector);


    if (!fromElement || !toElement) {
      return null;
    }

    if (this.hideIfFoundSelector) {
      if (document.querySelector(this.hideIfFoundSelector)) { return null; }
    }

    let rect;
    rect = fromElement.getBoundingClientRect();
    let  p0x = rect.left + rect.width / 2 + this.fromOffsetX;
    let p0y = rect.top + rect.height / 2 - this.fromOffsetY + window.scrollY;

    rect = toElement.getBoundingClientRect();
    let p2x = rect.left + rect.width / 2 + this.toOffsetX;
    let p2y = rect.top + rect.height / 2 - this.toOffsetY + window.scrollY;

    let p1x = (p0x + p2x) / 2 + this.middleX;
    let p1y = (p0y + p2y) / 2 - this.middleY;

    const settings = {
      p0x,
      p0y,
      p1x,
      p1y,
      p2x,
      p2y,
      size: 30,
      lineWidth: this.width,
      strokeStyle: this.color
    };

    const style = {};
    const x_min_max = this.quadraticCurveMinMax(
            settings.p0x,
            settings.p1x,
            settings.p2x
          );
    const y_min_max = this.quadraticCurveMinMax(
            settings.p0y,
            settings.p1y,
            settings.p2y
          );

    const padding = settings.size - settings.lineWidth;

    const x_min = x_min_max[0] - padding;
    const x_max = x_min_max[1] + padding;
    const y_min = y_min_max[0] - padding;
    const y_max = y_min_max[1] + padding;

           p0x = settings.p0x - x_min;
           p0y = settings.p0y - y_min;
           p1x = settings.p1x - x_min;
           p1y = settings.p1y - y_min;
           p2x = settings.p2x - x_min;
           p2y = settings.p2y - y_min;

          this.myCanvas.nativeElement.style.position = 'absolute';
          this.myCanvas.nativeElement.style.pointerEvents = 'none';
          this.myCanvas.nativeElement.style.top = y_min + 'px';
          this.myCanvas.nativeElement.style.left = x_min + 'px';
          this.myCanvas.nativeElement.width = x_max - x_min;
          this.myCanvas.nativeElement.height = y_max - y_min;

          if (this.zIndex) {
            this.myCanvas.nativeElement.style.zIndex = this.zIndex;
          }

          const ctx = this.myCanvas.nativeElement.getContext('2d');

          if (this.debugLine) {
            ctx.arc(p0x, p0y, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.arc(p1x, p1y, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.arc(p2x, p2y, 10, 0, 2 * Math.PI);
            ctx.stroke();
          }

          // Styling
          ctx.strokeStyle = settings.strokeStyle;
          ctx.lineWidth = settings.lineWidth;
          ctx.lineJoin = 'round';
          ctx.lineCap = 'round';

          // Arrow body
          ctx.beginPath();
          ctx.moveTo(p0x, p0y);
          ctx.quadraticCurveTo(p1x, p1y, p2x, p2y);
          ctx.stroke();

          // Arrow head
          const angle = Math.atan2(p2y - p1y, p2x - p1x);
          ctx.translate(p2x, p2y);

          // Right side
          ctx.rotate(angle + 1);
          ctx.beginPath();
          ctx.moveTo(0, settings.size);
          ctx.lineTo(0, 0);
          ctx.stroke();

          // Left side
          ctx.rotate(-2);
          ctx.lineTo(0, -settings.size);
          ctx.stroke();

          // Restore context
          ctx.rotate(1 - angle);
          ctx.translate(-p2x, -p2y);
        }
      }
