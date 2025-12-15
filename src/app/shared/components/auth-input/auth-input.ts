import { Component, input, Input, InputSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-auth-input',
  imports: [],
  templateUrl: './auth-input.html',
  styleUrl: './auth-input.css',
})
export class AuthInput {
  label: InputSignal<string> = input.required();
  id: InputSignal<string> = input.required();
  type: InputSignal<string> = input('text');
  name: InputSignal<string> = input.required();
  placeholder: InputSignal<string> = input.required();
}
