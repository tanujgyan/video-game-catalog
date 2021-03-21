import { VideogameModel } from './../shared/videogame-model';
import { Component, OnDestroy, OnInit,Renderer2  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { VideogameServiceService } from '../shared/videogame-service.service';
import { map } from 'rxjs/operators';
import { DataTablesModule } from 'angular-datatables';
@Component({
  selector: 'app-videogame-list',
  templateUrl: 'videogame-list.component.html',
})
export class VideogameListComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  videogames: VideogameModel[] = [];
  id!: string;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(
    private httpClient: HttpClient,
    private service: VideogameServiceService,
    public renderer: Renderer2, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      
      //   $('td', row).off('click');
      //   $('td', row).on('click', () => {
      //     console.log("row clicked "+data.toString().split(",")[0]
      //     );
      //     this.id=data.toString().split(",")[0];
      //   });
      //   return row;
      // }
    };
    
    
  }
  
   
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    //this.id="";
  }
  

  ngAfterViewInit(): void {
    this.service.getVideogameList().subscribe((data) => {
      this.videogames = data as any;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    },
    ()=>{
      alert("Internal Server Error.There was an error retrieving your request. Please contact support");
    });
    
    
  }
  
  editbuttonclicked(data:any)
  {
    if (data!=undefined && data!=null) {
      this.router.navigate(["/videogame-edit",parseInt(data)]);
    }
  }
}
