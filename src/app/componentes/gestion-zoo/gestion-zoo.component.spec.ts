import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionZooComponent } from './gestion-zoo.component';

describe('GestionZooComponent', () => {
  let component: GestionZooComponent;
  let fixture: ComponentFixture<GestionZooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionZooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
