import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-auth-input',
  imports: [],
  templateUrl: './auth-input.html',
  styleUrl: './auth-input.css',
})
export class AuthInput {
  @Input({required: true}) label!: string;
  @Input({required: true}) id!: string;
  @Input() type: string = 'text';
  @Input({required: true}) name!: string;
  @Input({required: true}) placeholder!: string;
}
