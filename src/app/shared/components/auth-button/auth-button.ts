import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  imports: [],
  template: '<button class="w-full bg-blue-600 h-[46px] font-medium text-white text-sm font-geist-mono cursor-pointer" [innerHTML]="buttonText"></button>',
})
export class AuthButton {
  @Input({required: true}) buttonText!: string;
}
