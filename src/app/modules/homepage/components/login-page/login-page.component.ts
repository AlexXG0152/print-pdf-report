import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  goodWord?: any;
  showErrorMessage: boolean = false;
  showSuccessMessage: boolean = false;

  login() {
    if (this.goodWord === 'showSuccessMessage') {
      this.showErrorMessage = false;
      this.showSuccessMessage = true;
      this.router.navigate([
        '/aa6sd67897dsf78gf98lf234s$df2GsdfsdjOGfsFDG2sfsGsdGFfsdfdf34df234$lf234s$df2GsdfsdjOGfsFDG2sfsGsdGFfsdfdf34df234$',
      ]);
    } else {
      this.showErrorMessage = true;
      this.showSuccessMessage = false;
    }
  }
}
