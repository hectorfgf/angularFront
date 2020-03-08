import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsEditComponent } from './fruits-edit.component';

describe('FruitsEditComponent', () => {
  let component: FruitsEditComponent;
  let fixture: ComponentFixture<FruitsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
