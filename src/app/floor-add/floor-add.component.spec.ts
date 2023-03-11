import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorAddComponent } from './floor-add.component';

describe('FloorAddComponent', () => {
  let component: FloorAddComponent;
  let fixture: ComponentFixture<FloorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
