import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameListComponent } from './videogame-list.component';

describe('VideogameListComponent', () => {
  let component: VideogameListComponent;
  let fixture: ComponentFixture<VideogameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
