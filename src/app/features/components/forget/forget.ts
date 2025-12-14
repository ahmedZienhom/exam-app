import { Component } from '@angular/core';
import { AuthInput } from '@shared/components/auth-input/auth-input';
import { AuthButton } from '@shared/components/auth-button/auth-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget',
  imports: [AuthInput,AuthButton,RouterLink],
  templateUrl: './forget.html',
  styleUrl: './forget.css',
})
export class Forget {

}
