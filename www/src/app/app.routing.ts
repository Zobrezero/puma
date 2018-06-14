import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ClientHomepageComponent } from './client-homepage/client-homepage.component';

import { CatalogueComponent } from './catalogue/catalogue.component';

import { RepairAddComponent } from './repair-add/repair-add.component';
import { RepairEditComponent } from './repair-edit/repair-edit.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { RepairViewComponent } from './repair-view/repair-view.component';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListComponent } from './product-list/product-list.component';

import { CartAddComponent } from './cart-add/cart-add.component';
import { CartEditComponent } from './cart-edit/cart-edit.component';
import { CartListComponent } from './cart-list/cart-list.component';

import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionAddComponent } from './promotion-add/promotion-add.component';
import { PromotionEditComponent } from './promotion-edit/promotion-edit.component';
import { PromotionViewComponent } from './promotion-view/promotion-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'adminhomepage', component: AdminHomepageComponent},
  { path: 'clienthomepage', component: ClientHomepageComponent},
  { path: 'catalogue', component: CatalogueComponent},
  { path: 'repairadd', component: RepairAddComponent},
  { path: 'repairedit', component: RepairEditComponent},
  { path: 'repairlist', component: RepairListComponent},
  { path: 'repairview', component: RepairViewComponent},
  { path: 'productadd', component: ProductAddComponent},
  { path: 'productedit', component: ProductEditComponent},
  { path: 'productview', component: ProductViewComponent},
  { path: 'productlist', component: ProductListComponent},
  { path: 'cartadd', component: CartAddComponent},
  { path: 'cartedit', component: CartEditComponent},
  { path: 'cartlist', component: CartListComponent},
  { path: 'promotionlist', component: PromotionListComponent},
  { path: 'promotionadd', component: PromotionAddComponent},
  { path: 'promotionedit', component: PromotionEditComponent},
  { path: 'promotionview', component: PromotionViewComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);