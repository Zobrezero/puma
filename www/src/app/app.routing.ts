import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

import { AdminHomepageComponent } from './admin/homepage.component';
import { AdminLoginComponent } from './admin/login.component';
import { AdminAddComponent } from './admin/add.component';
import { AdminEditComponent } from './admin/edit.component';
import { AdminListComponent } from './admin/list.component';

import { ClientHomepageComponent } from './client/homepage.component';
import { ClientLoginComponent } from './client/login.component';
import { ClientAddComponent } from './client/add.component';
import { ClientEditComponent } from './client/edit.component';
import { ClientListComponent } from './client/list.component';

import { RepairAddComponent } from './repair/add.component';
import { RepairEditComponent } from './repair/edit.component';
import { RepairListComponent } from './repair/list.component';
import { RepairViewComponent } from './repair/view.component';

import { ProductAddComponent } from './product/add.component';
import { ProductEditComponent } from './product/edit.component';
import { ProductViewComponent } from './product/view.component';
import { ProductListComponent } from './product/list.component';

import { CartAddComponent } from './cart/add.component';
import { CartEditComponent } from './cart/edit.component';
import { CartListComponent } from './cart/list.component';

import { PromotionListComponent } from './promotion/list.component';
import { PromotionAddComponent } from './promotion/add.component';
import { PromotionEditComponent } from './promotion/edit.component';
import { PromotionViewComponent } from './promotion/view.component';

import { CatalogueComponent } from './catalogue/catalogue.component';

import { ConfsComponent } from './confs/confs.component';

import { PagesComponent } from './pages/pages.component';

import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'catalogue', component: CatalogueComponent},
  { path: 'termsconditions', component: TermsConditionsComponent},

  { path: 'admin-homepage', component: AdminHomepageComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'admin-add', component: AdminAddComponent },
  { path: 'admin-edit', component: AdminEditComponent },
  { path: 'admin-list', component: AdminListComponent },

  { path: 'client-homepage', component: ClientHomepageComponent},
  { path: 'client-login', component: ClientLoginComponent},
  { path: 'client-add', component: ClientAddComponent },
  { path: 'client-edit', component: ClientEditComponent },
  { path: 'client-list', component: ClientListComponent },

  { path: 'repair-add', component: RepairAddComponent},
  { path: 'repair-edit', component: RepairEditComponent},
  { path: 'repair-list', component: RepairListComponent},
  { path: 'repair-view', component: RepairViewComponent},

  { path: 'product-add', component: ProductAddComponent},
  { path: 'product-edit', component: ProductEditComponent},
  { path: 'product-view', component: ProductViewComponent},
  { path: 'product-list', component: ProductListComponent},

  { path: 'cart-add', component: CartAddComponent},
  { path: 'cart-edit', component: CartEditComponent},
  { path: 'cart-list', component: CartListComponent},

  { path: 'promotion-list', component: PromotionListComponent},
  { path: 'promotion-add', component: PromotionAddComponent},
  { path: 'promotion-edit', component: PromotionEditComponent},
  { path: 'promotion-view', component: PromotionViewComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);