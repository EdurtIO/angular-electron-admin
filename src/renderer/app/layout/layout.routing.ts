import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ForbiddenComponent } from '@renderer/app/pages/error/forbidden/forbidden.component';
import { NotfoundComponent } from '@renderer/app/pages/error/notfound/notfound.component';

const LAYOUT_ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'icon',
        children: [
          {
            path: 'zmdi',
            loadChildren: () => import('../pages/icon/zmdi/zmdi.module').then(m => m.IconsZmdiModule)
          },
          {
            path: 'fa',
            loadChildren: () => import('../pages/icon/fa/fa.module').then(m => m.IconsFaModule)
          }
        ]
      },
      {
        path: 'component',
        children: [
          {
            path: 'clipboard',
            loadChildren: () => import('../pages/component/clipboard/clipboard.module').then(m => m.ComponentClipboardModule)
          },
          {
            path: 'tooltips',
            loadChildren: () => import('../pages/component/tooltips/tooltips.module').then(m => m.TooltipsComponentModule)
          },
          {
            path: 'scrollbar',
            loadChildren: () => import('../pages/component/scrollbar/scrollbar.module').then(m => m.ScrollbarModule)
          },
          {
            path: 'datepicker',
            loadChildren: () => import('../pages/component/datepicker/datepicker.module').then(m => m.DatepickerModule)
          },
          {
            path: 'carousel',
            loadChildren: () => import('../pages/component/carousel/carousel.module').then(m => m.CarouselComponentModule)
          },
          {
            path: 'progressbar',
            loadChildren: () => import('../pages/component/progressbar/progressbar.module').then(m => m.ProgressbarComponentModule)
          },
          {
            path: 'keyboard',
            loadChildren: () => import('../pages/component/keyboard/keyboard.module').then(m => m.KeyboardModule)
          }
        ]
      },
      {
        path: 'directive',
        children: [
          {
            path: 'contribution',
            loadChildren: () => import('../pages/directive/contribution/contribution.module').then(m => m.DirectiveContributionModule)
          }
        ]
      },
      {
        path: 'error',
        children: [
          {
            path: '403',
            component: ForbiddenComponent
          },
          {
            path: '404',
            component: NotfoundComponent
          }
        ]
      }
    ]
  }
];
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
