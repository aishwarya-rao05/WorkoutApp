import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { workout } from './workout';

@Injectable()
export class WorkService {
  private _url = 'http://localhost:18073/api/Workout';
  constructor(private http: HttpClient) { }

  getAll(): Observable<workout[]> {
    return this.http.get<workout[]>(this._url);
  }

  getById(id: string): Observable<workout> {
    return this.http.get<workout>(this._url + `/${id}`);
  }

  save(work: workout) {
    return this.http.post(this._url, work);
  }

  update(work: workout) {
    return this.http.put(this._url, work);
  }

  delete(id: string) {
    return this.http.delete(this._url + `/${id}`);
  }

}
