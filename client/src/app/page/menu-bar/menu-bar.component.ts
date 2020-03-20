import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky = false;
  elementPosition: any;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if (windowScroll >= this.elementPosition) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
  }

}
