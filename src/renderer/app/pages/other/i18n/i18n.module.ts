import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { I18nComponent } from '@renderer/app/pages/other/i18n/i18n.component';

const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './renderer/assets/i18n/', '.json');
const I18N_ROUTES = [
  {path: '', component: I18nComponent}
];

@NgModule({
  declarations: [
    I18nComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(I18N_ROUTES),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslateStore
  ]
})
export class I18nModule {
}
