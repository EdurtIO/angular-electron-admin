import { NgModule } from '@angular/core';
import { ContributionModule } from '@renderer/directives/contribution/contribution.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectiveContributionComponent } from './contribution.component';
import { FaIconService } from '@renderer/services/icon/fa.service';

const DIRECTIVE_CONTRIBUTION_ROUTES = [
  {path: '', component: DirectiveContributionComponent}
];

@NgModule({
  declarations: [
    DirectiveContributionComponent
  ],
  imports: [
    CommonModule,
    ContributionModule,
    RouterModule.forChild(DIRECTIVE_CONTRIBUTION_ROUTES)
  ],
  providers: [
    FaIconService
  ]
})
export class DirectiveContributionModule {
}
