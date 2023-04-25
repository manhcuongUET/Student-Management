import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  roleUser: Observable<number>;
  //role-number
  roleUserSubject: BehaviorSubject<number> = new BehaviorSubject<number>(3);

  constructor() {
    this.roleUser = this.roleUserSubject.asObservable();
  }

  setValueRole(value: number) {
    this.roleUserSubject.next(value);
  }

  login() {}
}
