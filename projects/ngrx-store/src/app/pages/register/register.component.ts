import { Component, signal } from '@angular/core';
import { Button } from '../../shared/components/button';
import { RouterLink } from '@angular/router';
import { form, required, minLength, FormField, validate } from '@angular/forms/signals';
import { FormErrors } from '../../shared/components/form-errors';
import { registerSchema } from './register-schema';

@Component({
  selector: 'app-register',
  imports: [Button, RouterLink, FormErrors, FormField],
  host: { class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4' },
  template: `
    <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
      <h1 class="text-2xl font-bold text-center text-slate-900 mb-8">Register</h1>

      <form class="space-y-6" (submit)="onSubmit($event)">
        <div>
          <label for="username" class="block text-sm font-medium text-slate-700 mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            [formField]="registerForm.username"
            autocomplete="username"
            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your username"
          />
          <app-form-errors [control]="registerForm.username()" />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-slate-700 mb-2"> Email </label>
          <input
            id="email"
            type="email"
            [formField]="registerForm.email"
            autocomplete="email"
            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your email"
          />
          <app-form-errors [control]="registerForm.email()" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            [formField]="registerForm.password"
            autocomplete="current-password"
            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your password"
          />
          <app-form-errors [control]="registerForm.password()" />
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-slate-700 mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            [formField]="registerForm.confirmPassword"
            autocomplete="current-password"
            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your password"
          />
          <app-form-errors [control]="registerForm.confirmPassword()" />
        </div>

        <button appButton type="submit" class="w-full">Register</button>

        <p class="text-sm text-center text-slate-500 mt-4">
          Already have an account?
          <a routerLink="/login" class="text-slate-500 font-medium underline"> Login </a>
        </p>
      </form>
    </div>
  `,
})
export default class RegisterComponent {
  registerModel = signal({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Following form setup is similar to login form, but using the registerSchema for validation rules
  // This keeps the component clean and separates validation logic into its own file
  registerForm = form(this.registerModel, registerSchema);

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.registerForm().valid()) {
      console.log('Register Data: ', this.registerForm().value());
    } else {
      console.log('Form is invalid');
    }
  }
}
