import { VideogameModel } from './videogame-model';
import { Validators } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VideogameServiceService } from './videogame-service.service';
import { of } from 'rxjs/internal/observable/of';
import { toArray } from 'rxjs/operators';

fdescribe('VideogameServiceService', () => {
  let service: VideogameServiceService;
let httpClientMock: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClientMock=jasmine.createSpyObj<HttpClient>(['post','put','get']);
    service = new VideogameServiceService(httpClientMock);
  });
it('should return status code 201',()=>{
  let videogame={
    videogameId:0,
    videogameName:"Prince of persia",
    publisherName:"Ubisoft",
    platform:"PC",
    genere:"Adventure"
  }
  const response = new HttpResponse({status:201});
  httpClientMock.post.and.returnValue(of(response)); 
  service.postNewVideogame(videogame)
  .subscribe(
    (result) => {
      console.log("Result" + JSON.stringify(result));
      expect(JSON.stringify(result)).toContain('201');
    });
});

it('get should contain response status code 200',() =>{
  httpClientMock.get.and.returnValue(of(new HttpResponse({status:200,body:[]})));
service.getVideogameList().subscribe(
  (result)=>{  
    expect(JSON.stringify(result)).toContain('200');
  }
)
})














it('should contain status code 201 for put request',() =>{
let videogame={
  videogameId:1,
  videogameName:'God of War v2',
  publisherName:'Santa Monica',
  platform:'PS4',
  genere:'Action'
}
httpClientMock.put.and.returnValue(of(new HttpResponse({status:204,body:[]})))
service.postNewVideogame(videogame).subscribe((result)=>{
expect(JSON.stringify(result)).toContain('204');
})
})



});
