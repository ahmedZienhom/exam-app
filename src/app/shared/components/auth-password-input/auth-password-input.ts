import { Component, input, Input, InputSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-auth-password-input',
  imports: [],
  templateUrl: './auth-password-input.html',
  styleUrl: './auth-password-input.css',
})
export class AuthPasswordInput {
    seePassword: WritableSignal<boolean> = signal(false);

    //Inputs
    label: InputSignal<string> = input.required();
    id: InputSignal<string> = input.required();
    name: InputSignal<string> = input.required();
    placeholder: InputSignal<string> = input("********");
    

  togglePasswordVisabilty(){
    this.seePassword.set(!this.seePassword())
  }
}
