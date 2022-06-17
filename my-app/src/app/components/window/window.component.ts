import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { WindowPath } from 'src/app/services/window.path';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  providers: []
})

export class WindowComponent implements OnInit {
  setPath(paths: any) {
    this.pathItems = [];
    paths.forEach((path: any) => {
      this.pathItems.push({label: path});
    });
  }

  constructor(private pathService: WindowPath) {}

  pathItems: MenuItem[] = [];
  pathHome!: MenuItem;
  
  ngOnInit(): void {;
    this.pathHome = { icon: 'pi pi-home' };

    // При инициализации подписаться к переменной с данными сервиса путей.
    // При каждом изменении сервиса, изменить свои данные.
    this.pathService.path$.subscribe((path) => {
      this.setPath(path);
    });
  }

}
