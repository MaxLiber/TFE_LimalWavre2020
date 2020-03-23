import { Injectable } from '@angular/core';
import { SessionStorageKeyType } from '../enums/session-storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  store(key: SessionStorageKeyType, value: any) {
    sessionStorage.setItem(key, value);
  }

  read(key: SessionStorageKeyType): any {
    return sessionStorage.getItem(key);
  }

  clear() {
    sessionStorage.clear();
  }

  remove(key: SessionStorageKeyType) {
    sessionStorage.removeItem(key);
  }

  isSessionStorageSupporte(): boolean {
    if (window.sessionStorage) {
      return true;
    }
    return false;
  }
}
