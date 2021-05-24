import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmmarNotFoundComponent } from './ammar-not-found/ammar-not-found.component';
import { CategorieDeailsComponent } from './categorie-deails/categorie-deails.component';
import { CategorieUpdateComponent } from './categorie-update/categorie-update.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesListComponent },
  {
    path: 'categorie/:id',
    component: CategorieDeailsComponent,
    children: [{ path: 'update', component: CategorieUpdateComponent }],
  },
  { path: 'formations', component: FormationComponent },
  { path: '**', component: AmmarNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
