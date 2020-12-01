import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuariosAdminComponent } from './listado-usuarios-admin.component';

describe('ListadoUsuariosAdminComponent', () => {
  let component: ListadoUsuariosAdminComponent;
  let fixture: ComponentFixture<ListadoUsuariosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoUsuariosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
