import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaacComponent } from './isaac.component';

describe('IsaacComponent', () => {
  let component: IsaacComponent;
  let fixture: ComponentFixture<IsaacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsaacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsaacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
