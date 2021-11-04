import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LayoutRouting } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationTriggerComponent } from './navigation-trigger/navigation-trigger.component';
import { NavigationService } from '../../services/layout/navigation.service';
import { ThemeService } from '@renderer/services/layout/theme.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationTriggerComponent
  ],
  imports: [
    LayoutRouting,
    FormsModule,
    BsDropdownModule.forRoot(),
    ButtonsModule,
    CommonModule
  ],
  providers: [
    NavigationService,
    ThemeService
  ]
})
// @ts-ignore
export class LayoutModule {
}
