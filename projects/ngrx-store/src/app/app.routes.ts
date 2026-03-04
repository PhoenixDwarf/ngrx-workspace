import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component'),
  },
  {
    path: '',
    loadComponent: () => import('./pages/main-layout'),
    // canActivate: [authGuard],
    children: [
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component'),
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component'),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
