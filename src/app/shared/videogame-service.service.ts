import { VideogameModel } from './videogame-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideogameServiceService {
  constructor(private http: HttpClient) {}
  readonly baseURL = 'http://localhost:49160/api/Videogame';
  getVideogameList(): Observable<VideogameModel[]> {
    return this.http.get<VideogameModel[]>(this.baseURL);
  }
  postNewVideogame(videogame:VideogameModel){
    //if there is an id it means we are updating something
    if(videogame.videogameId>0)
    {
        return this.http.put(this.baseURL+"/"+videogame.videogameId,videogame)
    }
    //post method needs an id. so assign it to default of 0
    videogame.videogameId=0;
    return this.http.post(this.baseURL,videogame);
    
   }
   getVideogame(id:number): Observable<VideogameModel> {
     
  return this.http.get<VideogameModel>(this.baseURL+"/"+id); 
  }
  
}
