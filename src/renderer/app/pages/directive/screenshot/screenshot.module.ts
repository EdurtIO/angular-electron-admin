import { NgModule } from '@angular/core';
import { ContributionModule } from '@renderer/directives/contribution/contribution.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectiveScreenshotComponent } from '@renderer/app/pages/directive/screenshot/screenshot.component';
import { ScreenshotModule } from '@renderer/directives/screenshot/screenshot.module';

const DIRECTIVE_SCREENSHOT_ROUTES = [
  {path: '', component: DirectiveScreenshotComponent}
];

@NgModule({
  declarations: [
    DirectiveScreenshotComponent
  ],
  imports: [
    CommonModule,
    ContributionModule,
    ScreenshotModule,
    RouterModule.forChild(DIRECTIVE_SCREENSHOT_ROUTES)
  ],
  providers: []
})
export class DirectiveScreenshotModule {
}
