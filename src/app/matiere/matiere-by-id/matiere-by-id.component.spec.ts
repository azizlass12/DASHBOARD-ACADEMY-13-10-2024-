import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereByIdComponent } from './matiere-by-id.component';

describe('MatiereByIdComponent', () => {
  let component: MatiereByIdComponent;
  let fixture: ComponentFixture<MatiereByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
