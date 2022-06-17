import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { TreeService } from 'src/app/services/tree';
import { WindowPath } from 'src/app/services/window.path';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: []
})

export class TreeComponent implements OnInit {

  constructor(private messageService: MessageService, private pathService: WindowPath, private treeService: TreeService) {}

  @Input() tree!: any;

  ngOnInit(): void {
    // При инициализации подписаться к переменной с данными сервиса дерева.
    // При каждом изменении сервиса, изменить свои данные.
    this.treeService.data$.subscribe((tree) => {
      this.setTree(tree);
    });
  }

  setTree(tree: { entity: string, elements: TreeNode[] } ) {
    this.tree.elements = tree.elements;
    this.tree.entity = tree.entity;
  }

  nodeSelect(e: { node: TreeNode }) {
    this.messageService.add({severity:'success', summary:'Дерево', detail: "Вы выбрали элемент - " + this.selectedElement.label});
    // Получить рекурсивно путь выбранного элемента (массив строк).
    // Сохранить в сервис путей.
    this.pathService.changePath(this.getPathRecursive(e.node, [this.tree.entity]));
  }

  getPathRecursive(node: TreeNode, path: any[]) {
    // Рекурсивно пройтись по элементам выбранного дерева, до первого PARENT. Собрать массив наименований.
    if(node.parent) {
      this.getPathRecursive(node.parent, path);
    }
    path.push(node.label);
    return path;
  }

  selectedElement!: TreeNode;

  emptyFilter: string = "Нет данных";

  contextElements: MenuItem[] = [
    {
      label: 'Развернуть всё',
      icon: 'pi pi-search',
      command: (event) => this.expandAll()
    },
    {
      label: 'Свернуть всё',
      icon: 'pi pi-times',
      command: (event) => this.collapseAll()
    }
  ];

  expandAll() {
    this.tree.elements.forEach( (node: TreeNode) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.tree.elements.forEach( (node: TreeNode) => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node:TreeNode, isExpand:boolean){
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach( childNode => {
          this.expandRecursive(childNode, isExpand);
      });
    }
  }

  private recursiveReplace(elements: any, mask: string) {
    elements.forEach((element: {
      type: string;
      data: any;
      children: TreeNode[];
      label: string;
    }) => {
      var re = new RegExp(mask, 'igm');
      
      element.data = element.label.replace(re, '<span class="highlighted-text">$&</span>');
      if( element.data !== element.label ) {
        element.type = "hightlight";
      }

      this.recursiveReplace(element.children, mask);
    });
  }

  highlightFiltered(e: any) {
    if(e.filteredValue == null) {
      return
    }
    this.recursiveReplace(e.filteredValue, e.filter)
  }
}
