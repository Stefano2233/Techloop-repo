import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: DashboardHomeComponent, pathMatch: 'full'},
            {path: 'profile', component: ProfileComponent}
        ]
    },
    {path: '**', redirectTo: '/dashboard'}
];
