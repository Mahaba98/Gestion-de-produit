import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurNotFoundComponent } from './erreur-not-found.component';

describe('ErreurNotFoundComponent', () => {
  let component: ErreurNotFoundComponent;
  let fixture: ComponentFixture<ErreurNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreurNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
