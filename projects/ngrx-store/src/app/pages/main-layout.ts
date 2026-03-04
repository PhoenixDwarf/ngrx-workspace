import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/components/header.component';
import { FooterComponent } from '../core/components/footer.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
  `,
})
export default class MainLayout {}
