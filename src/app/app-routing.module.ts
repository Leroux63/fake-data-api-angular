import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from "./pages/auth/signin/signin.component";
import {ListComponent} from "./pages/users/list/list.component";
import {DetailsComponent} from "./pages/users/details/details.component";
import {ErrorComponent} from "./pages/error/error.component";
import {authGuard} from "./guards/auth/auth.guard";
import {ListProductComponent} from "./pages/products/list/listproduct.component";
import {DetailsProductComponent} from "./pages/products/details/detailsproduct.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'users'},
  {path: 'auth/signin', component: SigninComponent},
  {
    path: 'users', canActivate: [authGuard], children: [
      {path: '', component: ListComponent},
      {path: ':id', component: DetailsComponent}
    ]
  },
  {
    path: 'products', canActivate: [authGuard],children:[
      {path: '', component: ListProductComponent},
      {path: ':id',component: DetailsProductComponent}
    ]
  },
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
