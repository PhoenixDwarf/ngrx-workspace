import { Component, signal } from '@angular/core';
import { Button } from '../../shared/components/button';
import { RouterLink } from '@angular/router';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { FormErrors } from '../../shared/components/form-errors';

@Component({
  selector: 'app-login',
  imports: [Button, RouterLink, FormField, FormErrors],
  host: { class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4' },
  template: `
    <form
      class="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col gap-6"
      (submit)="onSubmit($event)"
    >
      <h2 class="text-2xl font-bold text-center mb-2">Sign in</h2>
      <div class="flex flex-col gap-2">
        <label for="username" class="text-sm font-medium text-gray-700">Username</label>
        <input
          id="username"
          type="text"
          [formField]="loginForm.username"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          autocomplete="username"
          placeholder="Enter your username"
        />
        <app-form-errors [control]="loginForm.username()" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          [formField]="loginForm.password"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          autocomplete="current-password"
          placeholder="Enter your password"
        />
        <app-form-errors [control]="loginForm.password()" />
      </div>
      <button type="submit" class="w-full" appButton variant="primary">
        <!-- [disabled]="loginForm().invalid() && loginForm().touched()" -->
        Login
      </button>
      <p class="text-sm text-center text-slate-500 mt-4">
        Don't have an account?
        <a routerLink="/register" class="text-slate-500 font-medium underline">Register</a>
      </p>
    </form>
  `,
})
export default class LoginComponent {
  loginModel = signal({
    username: '',
    password: '',
  });

  loginForm = form(this.loginModel, (rootPath) => {
    required(rootPath.username, { message: 'Username is required' });
    required(rootPath.password, { message: 'Password is required' });
    minLength(rootPath.password, 6, { message: 'Password must be at least 6 characters long' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm().valid()) {
      console.log('Login Data: ', this.loginForm().value());
    } else {
      console.log('Form is invalid');
    }
  }
}
