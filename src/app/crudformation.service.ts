import { Injectable } from '@angular/core';
import { Categorie } from './categorie';
import { CrudCategoryService } from './crud-category.service';

@Injectable({
  providedIn: 'root',
})
export class CrudformationService {
  //  categorie: Categorie;
  constructor(private categServ: CrudCategoryService) {}

  initiateFormation() {
    // this.categorie = this.categServ.categoriesTab[0];
  }
}
