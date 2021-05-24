import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDeailsComponent } from './categorie-deails.component';

describe('CategorieDeailsComponent', () => {
  let component: CategorieDeailsComponent;
  let fixture: ComponentFixture<CategorieDeailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieDeailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieDeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
