import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private rolSource = new BehaviorSubject<string>('');
  currentRol = this.rolSource.asObservable();

  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();

  constructor() { }

  changeRol(rol: string) {
    this.rolSource.next(rol);
  }

  changeId(id: number) {
    this.idSource.next(id);
  }

}
