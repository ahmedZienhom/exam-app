import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaticView } from '../../comonents/static-view/static-view';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, StaticView],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

}
