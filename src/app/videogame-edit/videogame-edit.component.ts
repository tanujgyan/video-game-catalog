import { VideogameModel } from './../shared/videogame-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { VideogameServiceService } from '../shared/videogame-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-videogame-edit',
  templateUrl: './videogame-edit.component.html',
  styleUrls: ['./videogame-edit.component.css'],
})
export class VideogameEditComponent implements OnInit {
  form: FormGroup;

  title = new FormControl('');
  publisher = new FormControl('');
  platform = new FormControl('');
  genere = new FormControl('');
  //videogame:Observable<VideogameModel>=new Observable();
  selectedId: any;

  constructor(
    private httpClient: HttpClient,
    public service: VideogameServiceService,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      videogameId:[''],
      videogameName: [''],
      publisherName: [''],
      platform: [''],
      genere: [''],
    });
  }

  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    this.service.getVideogame(parseInt(this.selectedId));
    if (parseInt(this.selectedId) > 0)
      this.service.getVideogame(parseInt(this.selectedId)).subscribe(
        (res)=>
        {
          console.log(res);
          (<FormGroup>this.form).setValue(res, { onlySelf: true });  
        });
  }
  submitForm() {
    console.log(this.form.value);
    this.service.postNewVideogame(this.form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
