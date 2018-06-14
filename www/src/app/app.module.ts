import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ConfsComponent } from './confs/confs.component';
import { PagesComponent } from './pages/pages.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,
    AdminHomepageComponent,
    ClientHomepageComponent,

    CatalogueComponent,

    RepairAddComponent,
    RepairEditComponent,
    RepairListComponent,
    RepairViewComponent,

    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductViewComponent,

    CartAddComponent,
    CartEditComponent,
    CartListComponent,

    PromotionListComponent,
    PromotionAddComponent,
    PromotionEditComponent,
    PromotionViewComponent,
    AdminLoginComponent,
    ClientLoginComponent,
    ConfsComponent,
    PagesComponent,
    TermsConditionsComponent,

  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
