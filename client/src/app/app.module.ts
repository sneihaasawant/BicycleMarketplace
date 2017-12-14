import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { UserService } from './users/user.service';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { SearchPipe } from './browse/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MarketplaceComponent,
    BrowseComponent,
    ListingsComponent,
    SearchPipe,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
