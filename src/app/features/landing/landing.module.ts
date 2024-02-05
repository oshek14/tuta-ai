import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing.module';
import { LandingComponent } from './containers/landing.component';
import { ChatGPTHttpService } from './services/chatgpt-http.service';
@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule],
  providers: []
})
export class LandingModule {}
