import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategorieItemComponent } from './categorie-item/categorie-item.component';
import { ThemeComponent } from './theme/theme.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { FormationComponent } from './formation/formation.component';
import { HeaderComponent } from './header/header.component';
import { AmmarNotFoundComponent } from './ammar-not-found/ammar-not-found.component';
import { CategorieDeailsComponent } from './categorie-deails/categorie-deails.component';
import { CategorieUpdateComponent } from './categorie-update/categorie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategorieItemComponent,
    ThemeComponent,
    MyDirectiveDirective,
    FormationComponent,
    HeaderComponent,
    AmmarNotFoundComponent,
    CategorieDeailsComponent,
    CategorieUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
