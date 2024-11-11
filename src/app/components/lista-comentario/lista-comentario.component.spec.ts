import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComentarioComponent } from './lista-comentario.component';

describe('ListaComentarioComponent', () => {
  let component: ListaComentarioComponent;
  let fixture: ComponentFixture<ListaComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComentarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
