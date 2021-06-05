import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  reseller = false;

  constructor() { }

  isReseller(): boolean {
    return this.reseller;
  }

}
