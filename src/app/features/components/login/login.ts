import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthButton } from '@shared/components/auth-button/auth-button';
import { AuthInput } from '@shared/components/auth-input/auth-input';
import { AuthPasswordInput } from '@shared/components/auth-password-input/auth-password-input';




@Component({
  selector: 'app-login',
  imports: [AuthInput,AuthPasswordInput,AuthButton,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
