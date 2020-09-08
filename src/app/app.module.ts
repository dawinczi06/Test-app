import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
 
const routes: Routes = [
  { path: 'accounts', component: AccountsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]; 

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
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,  
    MatSelectModule,
    MatInputModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
