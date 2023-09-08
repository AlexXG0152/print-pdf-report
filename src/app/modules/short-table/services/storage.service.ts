import { Injectable } from '@angular/core';

const USER = 'USER';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  clear(): void {
    window.localStorage.clear();
  }

  saveUser(user: string): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, user);
  }

  getUser() {
    return JSON.parse(localStorage.getItem(USER)!);
  }
}
