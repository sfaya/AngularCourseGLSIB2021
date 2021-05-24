import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudCategorieService } from '../crud-category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  categories: any = [];
  categorieName = '';
  categorieId = 0;
  constructor(
    private categoryservice: CrudCategorieService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.fetchcategories();
  }

  fetchcategories() {
    return this.categoryservice.getCategories().subscribe((data: {}) => {
      this.categories = data;
    });
  }

  createCategory() {
    this.categoryservice
      .create({ id: this.categorieId, name: this.categorieName })
      .subscribe((res) => {
        this.fetchcategories();
      });
  }

  remove(id: any) {
    this.categoryservice.delete(id).subscribe((res) => {
      this.fetchcategories();
    });
  }

  goToFormation() {
    this.route.navigate(['formations']);
  }
  showDetails(id: any) {
    this.route.navigate(['categorie', id]);
  }
}
