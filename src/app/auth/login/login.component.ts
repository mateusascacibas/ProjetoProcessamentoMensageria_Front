import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  clientId = '';
  clientSecret = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.clientId, this.clientSecret).subscribe(() => {
      this.router.navigate(['/pedidos']);
    });
  }
}
