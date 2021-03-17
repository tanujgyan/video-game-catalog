import { VideogameModel } from './videogame-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideogameServiceService {
  constructor(private http: HttpClient) {}
  readonly baseURL = 'http://localhost:57363/api/Videogames';
  getVideogameList(): Observable<VideogameModel[]> {
    return this.http.get<VideogameModel[]>(this.baseURL);
  }
}
