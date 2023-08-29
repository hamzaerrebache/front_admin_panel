import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesModule } from './dashboard/vehicles/vehicles.module';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [  
   { path: 'dashboard', component: StatisticsComponent, canActivate: [AuthGuard]},
   { path: 'register', component: SignupComponent },
   { path: 'login', component: SigninComponent },
   { path: 'user-profile' , component:UserProfileComponent, canActivate: [AuthGuard]},
   { path: 'vehicles', loadChildren: () => import('./dashboard/vehicles/vehicles.module').then(m => m.VehiclesModule) , canActivate: [AuthGuard]},
   { path: 'bookings', loadChildren: () => import('./dashboard/bookings/bookings.module').then(m => m.BookingsModule) , canActivate: [AuthGuard]},
   { path: 'clients', loadChildren: () => import('./dashboard/clients/clients.module').then(m => m.ClientsModule) , canActivate: [AuthGuard]},
   { path: 'offers', loadChildren: () => import('./dashboard/offres/offres.module').then(m => m.OffresModule) , canActivate: [AuthGuard]},
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: '**', redirectTo: 'dashboard' }
]

@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,
    VehiclesModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

