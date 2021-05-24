import { Component, OnInit } from '@angular/core';
import { CrudCategorieService } from '../crud-category.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent implements OnInit {
  formations = [
    { id: 1, name: 'angular' },
    { id: 2, name: 'Node' },
  ];

  constructor(private categoriserv: CrudCategorieService) {}

  ngOnInit(): void {}
}
