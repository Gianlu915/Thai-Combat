import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userNameSubject = new BehaviorSubject<string>("");
  userName$ = this.userNameSubject.asObservable();


  constructor(private http: HttpClient) { }

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
