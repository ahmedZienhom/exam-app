import { AfterViewInit, Component, signal, WritableSignal } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { AuthButton } from '@shared/components/auth-button/auth-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-otp',
  imports: [InputOtpModule,FormsModule,AuthButton,RouterLink],
  templateUrl: './otp.html',
  styleUrl: './otp.css',
})
export class OTP implements AfterViewInit {
  otp: string ='';
  counter:WritableSignal<number> = signal(60);

  ngAfterViewInit(): void {
    this.count();
  }

  count() {
    let intervalVar = setInterval(() => {
      if(this.counter() > 0) {
        this.counter.update((prev) => prev - 1);
      }else{
        clearInterval(intervalVar);
      }
    }, 1000);
  }
}
