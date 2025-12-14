import { Component, computed, signal, WritableSignal } from '@angular/core';
import { AuthInput } from '@shared/components/auth-input/auth-input';
import { SelectModule } from 'primeng/select';
import { Country } from '../../interfaces/ICountry';
import { FormsModule } from '@angular/forms';
import { AuthPasswordInput } from '@shared/components/auth-password-input/auth-password-input';
import { AuthButton } from '@shared/components/auth-button/auth-button';
import { RouterLink } from '@angular/router';
 


@Component({
  selector: 'app-register',
  imports: [AuthInput,SelectModule,FormsModule,AuthPasswordInput,AuthButton,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  countries: WritableSignal<Country[]> = signal([
    { name: 'Egypt', iso: 'EG', code: '+20', flag: 'https://flagcdn.com/w20/eg.png', max: 10, placeholder: '1012345678' },
    { name: 'Saudi Arabia', iso: 'SA', code: '+966', flag: 'https://flagcdn.com/w20/sa.png', max: 9, placeholder: '512345678' },
    { name: 'UAE', iso: 'AE', code: '+971', flag: 'https://flagcdn.com/w20/ae.png', max: 9, placeholder: '501234567' }
  ]);

  selectedCountry: WritableSignal<Country> = signal(this.countries()[0]);

  phoneNumber: WritableSignal<string> = signal('');
  phonePlaceholder = computed<string>(() => this.selectedCountry().placeholder);
  fullNumber = computed<string>(() => `${this.selectedCountry().code}${this.phoneNumber()}`);

  onCountryChange(country: Country) {
    this.selectedCountry.set(country);
    this.phoneNumber.set('');
  }

  onPhoneNumberChange(value: string) {
    const digits = (value ?? '').replace(/\D/g, '');
    this.phoneNumber.set(digits.slice(0, this.selectedCountry().max));
  }
}
