import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClarityPortfoliosServerlessWidgetComponent } from './clarity-portfolios-serverless-widget/clarity-portfolios-serverless-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ClarityPortfoliosServerlessWidgetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
