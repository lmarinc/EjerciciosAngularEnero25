import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisMeterologicoComponent } from './analisis-meterologico.component';

describe('AnalisisMeterologicoComponent', () => {
  let component: AnalisisMeterologicoComponent;
  let fixture: ComponentFixture<AnalisisMeterologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisMeterologicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisMeterologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
