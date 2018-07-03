import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MaterialModule } from './material/material.module';

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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    AdminHomepageComponent,
    AdminLoginComponent,

    ClientHomepageComponent,
    ClientLoginComponent,

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

    ConfsComponent,

    PagesComponent,

    TermsConditionsComponent,

    AdminAddComponent,

    AdminEditComponent,

    AdminListComponent,

    ClientAddComponent,

    ClientEditComponent,

    ClientListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
