import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameEditComponent } from './videogame-edit.component';

describe('VideogameEditComponent', () => {
  let component: VideogameEditComponent;
  let fixture: ComponentFixture<VideogameEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameEditComponent ]
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
});
