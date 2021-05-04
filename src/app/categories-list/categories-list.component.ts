import { Component, OnInit } from '@angular/core';
import{Categorie} from '../categorie';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  textZone='';
  colorZone='';
  categoriesTab:Categorie[]=[];
  tab1=['Bonjour','Bonsoir','chehia tayba'];
  cpt=this.categoriesTab.length;

  constructor() { }

  ngOnInit(): void {
  }
  addCategorie(){
this.categoriesTab.push({text:this.textZone, color:this.colorZone});
console.log(this.categoriesTab.length);
  }
}
