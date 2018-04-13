import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {InterceptorModule} from './interceptor.module';
import {RouterModule} from '@angular/router';
import { AppRoutingModule, routingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InterceptorModule,
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
