import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { LayoutRouting } from './layout.routing';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutRouting,
    FormsModule
  ]
})

// @ts-ignore
export class LayoutModule {
}
