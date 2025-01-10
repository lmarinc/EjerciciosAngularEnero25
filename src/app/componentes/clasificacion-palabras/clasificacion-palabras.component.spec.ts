import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionPalabrasComponent } from './clasificacion-palabras.component';

describe('ClasificacionPalabrasComponent', () => {
  let component: ClasificacionPalabrasComponent;
  let fixture: ComponentFixture<ClasificacionPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasificacionPalabrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificacionPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
