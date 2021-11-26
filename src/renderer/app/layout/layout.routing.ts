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
          },
          {
            path: 'sortable',
            loadChildren: () => import('../pages/component/sortable/sortable.module').then(m => m.SortableComponentModule)
          },
          {
            path: 'alert',
            loadChildren: () => import('../pages/component/alert/alert.module').then(m => m.AlertsComponentModule)
          },
          {
            path: 'tabs',
            loadChildren: () => import('../pages/component/tabs/tabs.module').then(m => m.TabsComponentModule)
          },
          {
            path: 'toasty',
            loadChildren: () => import('../pages/component/toasty/toasty.module').then(m => m.ToastyComponentModule)
          },
          {
            path: 'typeahead',
            loadChildren: () => import('../pages/component/typeahead/typeahead.module').then(m => m.TypeaheadComponentModule)
          },
          {
            path: 'accordion',
            loadChildren: () => import('../pages/component/accordion/accordion.module').then(m => m.AccordionComponentModule)
          },
          {
            path: 'collapse',
            loadChildren: () => import('../pages/component/collapse/collapse.module').then(m => m.CollapseComponentModule)
          },
          {
            path: 'popover',
            loadChildren: () => import('../pages/component/popover/popover.module').then(m => m.PopoverComponentModule)
          },
          {
            path: 'modals',
            loadChildren: () => import('../pages/component/modals/modals.module').then(m => m.ModalsModule)
          }
        ]
      },
      {
        path: 'form',
        children: [
          {
            path: 'datepicker',
            loadChildren: () => import('../pages/form/datepicker/datepicker.module').then(m => m.DatepickerModule)
          },
          {
            path: 'timepicker',
            loadChildren: () => import('../pages/form/timepicker/timepicker.module').then(m => m.TimepickerComponentModule)
          },
          {
            path: 'rating',
            loadChildren: () => import('../pages/form/rating/rating.module').then(m => m.RatingComponentModule)
          },
          {
            path: 'dropdown',
            loadChildren: () => import('../pages/form/dropdown/dropdown.module').then(m => m.DropdownComponentModule)
          },
          {
            path: 'ngx-tree',
            loadChildren: () => import('../pages/form/tree/ngx-tree/ngx-tree.module').then(m => m.NgxTreeModule)
          }
        ]
      },
      {
        path: 'directive',
        children: [
          {
            path: 'contribution',
            loadChildren: () => import('../pages/directive/contribution/contribution.module').then(m => m.DirectiveContributionModule)
          },
          {
            path: 'screenshot',
            loadChildren: () => import('../pages/directive/screenshot/screenshot.module').then(m => m.DirectiveScreenshotModule)
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
      },
      {
        path: 'other',
        children: [
          {
            path: 'i18n',
            loadChildren: () => import('../pages/other/i18n/i18n.module').then(m => m.I18nModule)
          }
        ]
      },
      {
        path: 'editor',
        children: [
          {
            path: 'codemirror',
            loadChildren: () => import('../pages/editor/codemirror/codemirror.module').then(m => m.CodemirrorComponentModule)
          }
        ]
      }
    ]
  }
];
// eslint-disable-next-line @typescript-eslint/naming-convention
export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
