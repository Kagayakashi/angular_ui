import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ngOnInit() {
  }

  // Структура меню.
  // Для каждого элемента меню список его вложенных данных дерева.
  data: any[] = [
    {
      icon: "pi pi-briefcase",
      name: "Портфель",
      tooltip: "Список групп и объектов c данными",
      tree: [
        {
          label: "Документы",
          expandedIcon:"pi pi-folder-open",
          collapsedIcon: "pi pi-folder",
          expanded: false,
          children: [
            {
              label: "Нормативные документы",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Маркетинг",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
          ]
        },
        {
          label: "Контакты",
          expandedIcon:"pi pi-folder-open",
          collapsedIcon: "pi pi-folder",
          expanded: false,
          children: [
            {
              label: "SLV",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "SKZ",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "SGB",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "TST",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            }
          ]
        },
        {
          label: "Обслуживание клиентов",
          expandedIcon:"pi pi-folder-open",
          collapsedIcon: "pi pi-folder",
          expanded: false,
          children: [
            {
              label: "Системы",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Лицензии",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Сертификаты",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: [
                {
                  label: "Тренинги",
                  expandedIcon:"pi pi-folder-open",
                  collapsedIcon: "pi pi-folder",
                  expanded: false,
                  children: []
                },
                {
                  label: "Партнеры",
                  expandedIcon:"pi pi-folder-open",
                  collapsedIcon: "pi pi-folder",
                  expanded: false,
                  children: []
                }
              ]
            },
            {
              label: "Проекты",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: [
                {
                  label: "Паспорта",
                  expandedIcon:"pi pi-folder-open",
                  collapsedIcon: "pi pi-folder",
                  expanded: false,
                  children: []
                },
                {
                  label: "SLV",
                  expandedIcon:"pi pi-folder-open",
                  collapsedIcon: "pi pi-folder",
                  expanded: false,
                  children: []
                },
                {
                  label: "Архив",
                  expandedIcon:"pi pi-folder-open",
                  collapsedIcon: "pi pi-folder",
                  expanded: false,
                  children: [
                    {
                      label: "KGC",
                      expandedIcon:"pi pi-folder-open",
                      collapsedIcon: "pi pi-folder",
                      expanded: false,
                      children: []
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    },
    {
      icon: "pi pi-chart-bar",
      name: "Отчёты",
      tooltip: ""
    },
    {
      icon: "pi pi-database",
      name: "Справочники",
      tooltip: "Управления справочниками",
      tree: [
        {
          label: "Классификаторы",
          expandedIcon:"pi pi-folder-open",
          collapsedIcon: "pi pi-folder",
          expanded: false,
          children: [
            {
              label: "Должности",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Подразделения",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Типы пользователей",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Пользовательские функции в SimBASIC",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
          ]
        },
        {
          label: "Системные справочники",
          expandedIcon:"pi pi-folder-open",
          collapsedIcon: "pi pi-folder",
          expanded: false,
          children: [
            {
              label: "Страны",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Валюты",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Языки",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
            {
              label: "Цвета",
              expandedIcon:"pi pi-folder-open",
              collapsedIcon: "pi pi-folder",
              expanded: false,
              children: []
            },
          ]
        }
      ]
    },
    {
      icon: "pi pi-share-alt",
      name: "Процессы",
      tooltip: "Настройка бизнес-процессов"
    },
    {
      icon: "pi pi-users",
      name: "Пользователи",
      tooltip: "Список всех пользователей системы"
    },
    {
      icon: "pi pi-history",
      name: "Журнал",
      tooltip: "Истории действий пользователей системы"
    },
    {
      icon: "pi pi-sort-alt",
      name: "Имп/Эксп",
      tooltip: ""
    },
    {
      icon: "pi pi-id-card",
      name: "Роли",
      tooltip: ""
    },
    {
      icon: "pi pi-home",
      name: "Компания",
      tooltip: "Настройки системы в рамках компании"
    }
  ];
}
