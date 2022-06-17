import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() items: any;

  width: Number = 435;
  isResizable = false;
  isTreeVisible = true;
  isHiddenTreeVisible = false;
  tree: { entity?: string, elements?: TreeNode[] } = {}

  ngOnInit(): void { }
  
  openHiddenTree(e: any) {
    this.isHiddenTreeVisible = true;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (! this.isResizable) {
        return;
    }
    
    this.width = e.clientX;

    if(e.clientX > 1090) {
      this.width = 1223;
      this.isTreeVisible = true;
    }
    else if(e.clientX < 170) {
      this.width = 155;
      this.isTreeVisible = false;
    }
    else if(e.clientX < 300) {
      this.width = 285;
      this.isTreeVisible = true;
    }
    else if(e.clientX < 450) {
      this.width = 430;
      this.isTreeVisible = true;
    }
    else if(e.clientX < 600) {
      this.width = 555;
      this.isTreeVisible = true;
    }
    else if(e.clientX < 750) {
      this.width = 700;
      this.isTreeVisible = true;
    }
    else if(e.clientX < 885) {
      this.width = 820;
      this.isTreeVisible = true;
    }
    else if(e.clientX < 1030) {
      this.width = 970;
      this.isTreeVisible = true;
    }
    else if(e.clientX < 1160) {
      this.width = 1090;
      this.isTreeVisible = true;
    }

  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    this.isResizable = false;
    this.enableSelect();
    this.disableResizeScroll();
  }

  onMouseDown(e: MouseEvent) {
    this.isResizable = true;
    this.disableSelect();
    this.enableResizeScroll();
  }

  disableResizeScroll() {
    document.body.style.removeProperty('cursor');
  }

  enableResizeScroll() {
    document.body.style.setProperty('cursor', 'ew-resize');
  }

  disableSelect() {
    document.body.style.setProperty('-webkit-touch-callout', 'none');
    document.body.style.setProperty('-webkit-user-select', 'none');
    document.body.style.setProperty('-khtml-user-select', 'none');
    document.body.style.setProperty('-moz-user-select', 'none');
    document.body.style.setProperty('ms-user-select', 'none');
    document.body.style.setProperty('user-select', 'none');  
  }

  enableSelect() {
    document.body.style.removeProperty('-webkit-touch-callout');
    document.body.style.removeProperty('-webkit-user-select');
    document.body.style.removeProperty('-khtml-user-select');
    document.body.style.removeProperty('-moz-user-select');
    document.body.style.removeProperty('ms-user-select');
    document.body.style.removeProperty('user-select');  
  }
}
