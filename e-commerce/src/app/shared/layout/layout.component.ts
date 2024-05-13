import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2  } from '@angular/core';
import { Application } from '@splinetool/runtime';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent implements AfterViewInit {
  title = "Menu";
  @ViewChild('canvas3d1') canvas3dRef!: ElementRef<HTMLCanvasElement>;
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
        this.splineInstance.load('https://prod.spline.design/viU3urp9FQrcEf5i/scene.splinecode',
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
  
