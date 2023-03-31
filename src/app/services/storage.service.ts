import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  public get(key: string): Promise<any> {
    return this._storage.get(key);
  }

  public remove(key): Promise<any> {
    return this._storage.remove(key);
  }

  public clear(): Promise<any> {
    return this._storage.clear();
  }

  public for(): Promise<any> {
    return this._storage.keys()
  }

  public tamanho(): Promise<any> {
    return this._storage.length();
  }

}
