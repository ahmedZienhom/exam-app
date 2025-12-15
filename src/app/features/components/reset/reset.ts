import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthButton } from '@shared/components/auth-button/auth-button';
import { AuthPasswordInput } from '@shared/components/auth-password-input/auth-password-input';

@Component({
  selector: 'app-reset',
  imports: [AuthPasswordInput,AuthButton,RouterLink],
  templateUrl: './reset.html',
  styleUrl: './reset.css',
})
export class Reset {

}
