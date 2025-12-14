import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-auth-password-input',
  imports: [],
  templateUrl: './auth-password-input.html',
  styleUrl: './auth-password-input.css',
})
export class AuthPasswordInput {
    seePassword: WritableSignal<boolean> = signal(false);

    //Inputs
    @Input({required: true}) label!: string;
    @Input({required: true}) id!: string;
    @Input({required: true}) name!: string;
    @Input() placeholder: string = "********";
    

  togglePasswordVisabilty(){
    this.seePassword.set(!this.seePassword())
  }
}
