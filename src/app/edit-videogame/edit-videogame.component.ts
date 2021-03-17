import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-videogame',
  templateUrl: './edit-videogame.component.html',
  styleUrls: ['./edit-videogame.component.css']
})
export class EditVideogameComponent {
  name = new FormControl('')
  constructor() { }

  ngOnInit(): void {
  }

}
