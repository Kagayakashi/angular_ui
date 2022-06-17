import { Injectable } from '@angular/core';
import { Subject } from "rxjs"

@Injectable({
  providedIn: 'root',
})

export class TreeService {
  public data$ = new Subject<any>();

  // Сохранить any (данные) для переиспользования из другого компонента.
  // Компонент Tree обращается к текущему сервису для подписки и чтения данных
  public changeData(data: any): void {
    console.log(data)
    this.data$.next(data); 
  }
}
