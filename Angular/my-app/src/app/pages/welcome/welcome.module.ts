import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzTimelineModule } from 'ng-zorro-antd/timeline'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSpaceModule } from 'ng-zorro-antd/space'

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [
    WelcomeRoutingModule, NzDescriptionsModule,
    NzBadgeModule, NzTimelineModule, NzInputModule,
    NzButtonModule, CommonModule, NzSpaceModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
