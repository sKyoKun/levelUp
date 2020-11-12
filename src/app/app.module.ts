import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForKeyPipe } from './pipes/for-key.pipe';
import { NopeInterceptor } from './interceptors/nope.interceptor';
import { ButtonLolComponent } from './components/form-control-error/button-lol/button-lol.component';

@NgModule({
  declarations: [
    AppComponent,
    ForKeyPipe,
    ButtonLolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NopeInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
