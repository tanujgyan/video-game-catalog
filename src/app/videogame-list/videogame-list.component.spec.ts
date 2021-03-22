import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameListComponent } from './videogame-list.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('VideogameListComponent', () => {
  let component: VideogameListComponent;
  let fixture: ComponentFixture<VideogameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameListComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
