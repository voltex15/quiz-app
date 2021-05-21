import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  public submitted: boolean = false; 

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.submitted = true;
    this.authService.register(this.model.email, this.model.password);
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn() === true) {
      this.router.navigate(['/categoryRest']);
    }
  }

}
