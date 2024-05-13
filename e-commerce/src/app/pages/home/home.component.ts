import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2  } from '@angular/core';
import { Application } from '@splinetool/runtime';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  title = "Menu";
  @ViewChild('canvas3d') canvas3dRef!: ElementRef<HTMLCanvasElement>;
  splineInstance!: Application;
  splineObject!: Object;
  
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.canvas3dRef.nativeElement;
      this.splineInstance = new Application(canvas);
        this.splineInstance.load('https://prod.spline.design/DRqYC-tEzdItsrWO/scene.splinecode',
        {
          credentials: 'include',
          mode: 'no-cors',
        })
          .then(() => {
              this.renderer.setStyle(this.canvas3dRef.nativeElement, 'height', `${window.innerHeight}px` )
          })
          .catch((error) => {
            console.error("Error loading Spline scene:", error);
          });
    }
  }
}
