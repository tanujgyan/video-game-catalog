import { VideogameModel } from './../shared/videogame-model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideogameServiceService } from '../shared/videogame-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-videogame-edit',
  templateUrl: './videogame-edit.component.html',
  styleUrls: ['./videogame-edit.component.css'],
})
export class VideogameEditComponent implements OnInit {
  form: FormGroup;
  selectedId: any;
  btnName:string="";


  constructor(
    public service: VideogameServiceService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
     
      videogameId:[''],
      videogameName: ['',Validators.required],
      publisherName: ['',Validators.required],
      platform: ['',Validators.required],
      genere: ['',Validators.required],
    });
  }

  @ViewChild('submitButton', {read: ElementRef}) submitButton? : ElementRef;

  ngOnInit() {
    
    if(this.selectedId==undefined)
    this.selectedId = this.route.snapshot.paramMap.get('id')!=undefined?this.route.snapshot.paramMap.get('id'):0;
    
    //this.service.getVideogame(parseInt(this.selectedId));
    if (parseInt(this.selectedId) > 0)
    {
      this.btnName="Update";
      this.service.getVideogame(parseInt(this.selectedId)).subscribe(
        (res)=>
        {
          (<FormGroup>this.form).setValue(res, { onlySelf: true });  
        });
      }
        else
        {
        this.btnName="Add";
        }
  }
  submitForm() { 
    this.service.postNewVideogame(this.form.value).subscribe(
      (res) => {
        alert(this.btnName+" successful")
        this.router.navigate(["/videogame-list"]);
      },
      (err) => {
        alert("there was an error in add/update please try again later")
        console.log(err);
      }
    );
  }
  get videogameName() { return this.form.get('videogameName'); }
}
