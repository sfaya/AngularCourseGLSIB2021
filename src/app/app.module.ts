import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategorieItemComponent } from './categorie-item/categorie-item.component';
import { ThemeComponent } from './theme/theme.component';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategorieItemComponent,
    ThemeComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
