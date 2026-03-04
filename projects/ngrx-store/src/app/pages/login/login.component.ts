import { Component } from '@angular/core';
import { Button } from '../../shared/components/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Button, RouterLink],
  host: { class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4' },
  template: `
    <form
      class="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col gap-6"
      autocomplete="off"
    >
      <h2 class="text-2xl font-bold text-center mb-2">Sign in</h2>
      <div class="flex flex-col gap-2">
        <label for="username" class="text-sm font-medium text-gray-700">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          required
          autocomplete="username"
          placeholder="Enter your username"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
          required
          autocomplete="current-password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" class="w-full" appButton variant="primary">Login</button>
      <p class="text-center mt-4">
        Don't have an account?
        <a routerLink="/register" class="text-slate-500 hover:underline">Register here</a>
      </p>
    </form>
  `,
})
export default class LoginComponent {}
