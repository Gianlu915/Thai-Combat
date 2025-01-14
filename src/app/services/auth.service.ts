import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userNameSubject = new BehaviorSubject<string>("");
  userName$ = this.userNameSubject.asObservable();


  constructor() { }

  setUserName(name:string){
    this.userNameSubject.next(name);
  }

  getUserName(){
    return this.userNameSubject.value;
  }

  clearUserName(): void {
    this.userNameSubject.next("");
  }

  logoutUser(): void {
    this.userNameSubject.next('');
  }
}
