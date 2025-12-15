import { Routes } from '@angular/router';
import { AuthLayout } from './features/pages/auth-layout/auth-layout';
import { Login } from './features/components/login/login';
import { Register } from './features/components/register/register';
import { Forget } from './features/components/forget/forget';
import { OTP } from './features/components/otp/otp';
import { Reset } from './features/components/reset/reset';

export const routes: Routes = [
    {path:'', component: AuthLayout, children:[
        {path:'', redirectTo: 'login', pathMatch: 'full'},
        {path:'login', component: Login},
        {path:'register', component: Register},
        {path:'forget', component: Forget},
        {path:'otp', component: OTP},
        {path:'reset', component: Reset}
    ]
    }
];
