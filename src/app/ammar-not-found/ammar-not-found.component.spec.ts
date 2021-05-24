import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmarNotFoundComponent } from './ammar-not-found.component';

describe('AmmarNotFoundComponent', () => {
  let component: AmmarNotFoundComponent;
  let fixture: ComponentFixture<AmmarNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmarNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmarNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
