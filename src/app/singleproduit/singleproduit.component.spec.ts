import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproduitComponent } from './singleproduit.component';

describe('SingleproduitComponent', () => {
  let component: SingleproduitComponent;
  let fixture: ComponentFixture<SingleproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
