import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEmailComponent } from './del-email.component';

describe('DelEmailComponent', () => {
  let component: DelEmailComponent;
  let fixture: ComponentFixture<DelEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
