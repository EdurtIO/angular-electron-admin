import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from '@renderer/app/pages/component/tabs/tabs.component';
import { TabsService } from '@renderer/services/component/tabs.service';

const TABS_ROUTES = [
  {path: '', component: TabsComponent}
];

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule.forChild(TABS_ROUTES)
  ],
  providers: [
    TabsService
  ]
})
export class TabsComponentModule {
}
