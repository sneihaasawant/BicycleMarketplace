import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  {
  path: 'login',
  component: UsersComponent,
  },
  {
    path: 'market',
    component: MarketplaceComponent,
    children: [
    {path: 'browse', component: BrowseComponent},
    {path: 'listings', component: ListingsComponent}
    ]
  },
   {
    path: '**',
    redirectTo : '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
