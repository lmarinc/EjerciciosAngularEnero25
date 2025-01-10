import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFigurasComponent } from './gestion-figuras.component';

describe('GestionFigurasComponent', () => {
  let component: GestionFigurasComponent;
  let fixture: ComponentFixture<GestionFigurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFigurasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFigurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
