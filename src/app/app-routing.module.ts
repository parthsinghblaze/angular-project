import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes:Routes = [
  {path:'', component:HomeComponent },
  {path:'about', component:AboutComponent },
  {path:'contact', component:ContactComponent},
  {path:'product',component:ProductListComponent},
  {path:'product/:pid',component:ProductDetailComponent},
  {path:"**",component:PageNotFoundComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
