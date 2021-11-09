import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContributionComponent } from './contribution.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContributionComponent
  ],
  exports: [
    ContributionComponent
  ],
  providers: []
})
export class ContributionModule {
}
