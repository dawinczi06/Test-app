import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatCardModule } from '@angular/material/card';
 
const routes: Routes = [
  { path: 'accounts', component: AccountsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
] 

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    HomeComponent,
    AdminComponent,
    EditProfileComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatCardModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
