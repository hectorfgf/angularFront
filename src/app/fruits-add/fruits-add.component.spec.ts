import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAddComponent } from './fruits-add.component';

describe('FruitsAddComponent', () => {
  let component: FruitsAddComponent;
  let fixture: ComponentFixture<FruitsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
