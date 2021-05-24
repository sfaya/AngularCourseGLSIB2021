import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.css'],
})
export class CategorieItemComponent implements OnInit {
  @Input() value: Categorie = { id: 0, name: '' };

  constructor() {}

  ngOnInit(): void {}
}
