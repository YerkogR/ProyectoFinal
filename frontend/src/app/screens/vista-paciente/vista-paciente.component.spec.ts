import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPacienteComponent } from './vista-paciente.component';

describe('VistaPacienteComponent', () => {
  let component: VistaPacienteComponent;
  let fixture: ComponentFixture<VistaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
