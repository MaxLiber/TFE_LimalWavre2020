import { Injectable } from '@angular/core';
import { LocalStorageKeyType } from '../enums/local-storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  store(key: LocalStorageKeyType, value: any) {
    localStorage.setItem(key, value);
  }

  read(key: LocalStorageKeyType): any {
    return localStorage.getItem(key);
  }

  clear() {
    localStorage.clear();
  }

  remove(key: LocalStorageKeyType) {
    localStorage.removeItem(key);
  }

  isLocalStorageSupporte(): boolean {
    if (window.localStorage) {
      return true;
    }
    return false;
  }
}
