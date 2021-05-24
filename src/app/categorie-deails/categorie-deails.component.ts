import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-categorie-deails',
  templateUrl: './categorie-deails.component.html',
  styleUrls: ['./categorie-deails.component.css'],
})
export class CategorieDeailsComponent implements OnInit {
  categorieId: any;
  constructor(private activRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    //this.categorieId = this.activRoute.snapshot.paramMap.get('id');
    this.activRoute.paramMap.subscribe((parms: ParamMap) => {
      this.categorieId = parms.get('id');
    });
  }
  goPrev() {
    let id = parseInt(this.categorieId) - 1;
    this.route.navigate(['categorie', id]);
  }

  goNext() {
    let id = parseInt(this.categorieId) + 1;
    this.route.navigate(['categorie', id]);
  }
}
