import { Injectable } from '@angular/core';


@Injectable()
export class StorageProvider {
  public type: string = 'localStorage';
  public _window = window;
  
  constructor() {
  }

  public get(key: string) {
    return JSON.parse(this._window[this.type].getItem(key));
  }

  public set(key: string, value: string) {
    this._window[this.type].setItem(key, JSON.stringify(value));
  }

  public remove(key: string) {
    this._window[this.type].removeItem(key);
  }

  public clear() {
    this._window[this.type].clear();
  }
}
