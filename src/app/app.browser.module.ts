import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, AppModule],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
