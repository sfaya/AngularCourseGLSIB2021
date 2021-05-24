import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-update',
  templateUrl: './categorie-update.component.html',
  styleUrls: ['./categorie-update.component.css'],
})
export class CategorieUpdateComponent implements OnInit {
  id: any;
  constructor(route: Router) {}

  ngOnInit(): void {
    this.id = history.state;
  }
}
