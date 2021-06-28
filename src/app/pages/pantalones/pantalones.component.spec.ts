import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonesComponent } from './pantalones.component';

describe('PantalonesComponent', () => {
  let component: PantalonesComponent;
  let fixture: ComponentFixture<PantalonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantalonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantalonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
