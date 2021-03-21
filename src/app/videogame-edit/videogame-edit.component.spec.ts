import { VideogameModel } from './../shared/videogame-model';
import { Observable, of } from 'rxjs';
import { Button } from 'selenium-webdriver';
import { VideogameServiceService } from './../shared/videogame-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameEditComponent } from './videogame-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('VideogameEditComponent', () => {
  let component: VideogameEditComponent;
  let fixture: ComponentFixture<VideogameEditComponent>;
  let service: jasmine.SpyObj<VideogameServiceService>;

  beforeEach(async () => {
    service=jasmine.createSpyObj<VideogameServiceService>(['getVideogame'])
    await TestBed.configureTestingModule({
      declarations: [ VideogameEditComponent ],
      providers:[{provide:VideogameServiceService,useValue:service}],
      imports:[ReactiveFormsModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('when video game id is present', () => {
    it('should show button name as update',()=>{
      let videogame = {
       videogameId: 1,
       videogameName:"Farcry",
       platform:"PC",
       genere:"Action",
       publisherName:"Ubisoft"
     };
     component.selectedId=videogame.videogameId;
     service.getVideogame.and.returnValue(of(videogame))
     component.ngOnInit();
     fixture.detectChanges();
     expect(component.submitButton?.nativeElement.textContent).toBe('Update');
    
   });
  });
  
  describe('when video game id is not present', () => {
    it('should show button name as add',()=>{
      let videogame = {
       videogameId: 0,
       videogameName:"",
       platform:"",
       genere:"",
       publisherName:""
     };
     component.selectedId=videogame.videogameId;
     service.getVideogame.and.returnValue(of(videogame))
     component.ngOnInit();
     fixture.detectChanges();
     expect(component.submitButton?.nativeElement.textContent).toBe('Add');
   });

   it('should have value in title', () => {
    component.form.controls['videogameName'].setValue('Videogame Title');
    fixture.detectChanges();
    component.form.controls['videogameName'].setValue('');
    fixture.detectChanges();
    expect(component.form.valid).toBeFalsy();
    expect(component.submitButton?.nativeElement.disabled).toBeTruthy();
   });
  });
  it('should have value in publisher name', () => {
    component.form.controls['publisherName'].setValue('Publisher Name');
    fixture.detectChanges();
    component.form.controls['publisherName'].setValue('');
    fixture.detectChanges();
    expect(component.form.valid).toBeFalsy();
    expect(component.submitButton?.nativeElement.disabled).toBeTruthy();
   })

   it('should have value in platform', () => {
    component.form.controls['platform'].setValue('Platform Name');
    fixture.detectChanges();
    component.form.controls['platform'].setValue('');
    fixture.detectChanges();
    expect(component.form.valid).toBeFalsy();
    expect(component.submitButton?.nativeElement.disabled).toBeTruthy();
   })

   it('should have value in genere', () => {
    component.form.controls['genere'].setValue('Genere');
    fixture.detectChanges();
    component.form.controls['genere'].setValue('');
    fixture.detectChanges();
    expect(component.form.valid).toBeFalsy();
    expect(component.submitButton?.nativeElement.disabled).toBeTruthy();
   })

  });
