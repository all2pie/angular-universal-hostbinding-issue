import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Animate } from './custom.directive';

@NgModule({
  declarations: [AppComponent, Animate],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' })],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent, Animate],
})
export class AppModule {}
