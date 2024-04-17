import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanScreenComponent } from './kanban-screen.component';

describe('KanbanScreenComponent', () => {
  let component: KanbanScreenComponent;
  let fixture: ComponentFixture<KanbanScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
