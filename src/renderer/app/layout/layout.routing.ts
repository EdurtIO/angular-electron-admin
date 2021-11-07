import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

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
          }
        ]
      }
    ]
  }
];
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
