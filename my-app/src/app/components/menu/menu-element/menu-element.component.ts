import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TreeService } from 'src/app/services/tree';
import { WindowPath } from 'src/app/services/window.path';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.css']
})
export class MenuElementComponent implements OnInit {

  @Input() data: any;
  
  constructor(private messageService: MessageService, private treeService: TreeService, private pathService: WindowPath) { }

  ngOnInit(): void {
  }

  selectMenuItem() {
    this.messageService.add({severity:'success', summary:'Меню', detail: "Вы выбрали элемент - " + this.data.name});
    // Получить рекурсивно путь выбранного элемента (массив строк).
    // Сохранить в сервис путей.
    console.log('Updating tree...');
    this.treeService.changeData({entity: this.data.name, elements: this.data.tree});
    console.log('Tree updated.');

    console.log('Updating path...');
    this.pathService.changePath([this.data.name]);
    console.log('Path updated.');
  }

}
