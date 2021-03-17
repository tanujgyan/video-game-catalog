import { VideogameModel } from './../shared/videogame-model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { VideogameServiceService } from '../shared/videogame-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-videogame-list',
  templateUrl: 'videogame-list.component.html',
})
export class VideogameListComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  videogames: VideogameModel[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private httpClient: HttpClient,
    public service: VideogameServiceService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.service.getVideogameList().subscribe((data) => {
      this.videogames = data as any;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
