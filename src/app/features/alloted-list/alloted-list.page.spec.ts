import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllotedListPage } from './alloted-list.page';

describe('AllotedListPage', () => {
  let component: AllotedListPage;
  let fixture: ComponentFixture<AllotedListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
