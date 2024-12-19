import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThankYouTwoPage } from './thank-you-two.page';

describe('ThankYouTwoPage', () => {
  let component: ThankYouTwoPage;
  let fixture: ComponentFixture<ThankYouTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
