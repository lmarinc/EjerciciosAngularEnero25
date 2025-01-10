import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmpleadoComponent } from './gestion-empleado.component';

describe('GestionEmpleadoComponent', () => {
  let component: GestionEmpleadoComponent;
  let fixture: ComponentFixture<GestionEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
