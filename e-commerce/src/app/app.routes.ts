import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
    { path: '', title:"Home", component: HomeComponent },
    { path: 'about', title:"About", component: LayoutComponent },
];
