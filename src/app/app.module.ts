import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { GiohangTongComponent } from './giohang-tong/giohang-tong.component';
import { GiohangComponent } from './giohang/giohang.component';


@NgModule({
  declarations: [AppComponent, ChildComponent,GiohangTongComponent,GiohangComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
