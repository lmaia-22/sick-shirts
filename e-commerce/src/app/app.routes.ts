import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { provideRouter, withViewTransitions } from '@angular/router';
export const routes: Routes = [
    { 
        path: '',
        title:"Home", 
        component: HomeComponent
    },
    { 
        path: 'about', 
        title:"About", 
        component: LayoutComponent 
    },
    { 
        path: 'shop', 
        title:"Shop", 
        component: LayoutComponent 
    },
    { 
        path: 'contact', 
        title:"Contact", 
        component: LayoutComponent 
    },
    { 
        path: 'become-creator', 
        title:"Creator", 
        component: LayoutComponent 
    },
    { 
        path: 'faq', 
        title:"Faq", 
        component: LayoutComponent 
    },
];
