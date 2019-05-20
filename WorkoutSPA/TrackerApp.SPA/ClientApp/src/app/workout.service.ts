import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from './Category';

@Injectable()
export class WorkoutService {
  private _url = 'http://localhost:18073/api/Category';
  constructor(private http: HttpClient) { }

  getAll(): Observable<category[]> {
    return this.http.get<category[]>(this._url);
  }

  getById(id: string): Observable<category> {
    return this.http.get<category>(this._url + `/${id}`);
  }

  save(cat: category) {
    return this.http.post(this._url, cat);
  }

  update(cat: category) {
    return this.http.put(this._url, cat);
  }

  delete(id: string) {
    return this.http.delete(this._url + `/${id}`);
  }

}
