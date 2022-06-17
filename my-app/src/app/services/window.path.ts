import { Injectable } from '@angular/core';
import { Subject } from "rxjs"

@Injectable({
  providedIn: 'root',
})

export class WindowPath {
  public path$ = new Subject<any>();

  // Сохранить any (массив строк) для переиспользования из другого компонента.
  // Компонент Window обращается к текущему сервису для подписки и чтения данных
  public changePath(item: any): void {
    console.log(item)
    this.path$.next(item); 
  }
}
