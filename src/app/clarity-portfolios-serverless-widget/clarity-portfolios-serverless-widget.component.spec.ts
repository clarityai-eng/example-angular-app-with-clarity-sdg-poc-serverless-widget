import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityPortfoliosServerlessWidgetComponent } from './clarity-portfolios-serverless-widget.component';

describe('ClarityOrganizationWidgetComponent', () => {
  let component: ClarityPortfoliosServerlessWidgetComponent;
  let fixture: ComponentFixture<ClarityPortfoliosServerlessWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarityPortfoliosServerlessWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityPortfoliosServerlessWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
