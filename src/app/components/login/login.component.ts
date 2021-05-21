import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
export class LoginComponent implements OnInit {
    public model = {
        email: '',
        password: ''
    }

    public submitted: boolean = false; 
    
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    
    onSubmit() {
        this.submitted = true;
        this.authService.login(this.model.email, this.model.password);
    }
    
    ngOnInit(): void {
        if (this.authService.isLoggedIn() === true) {
            this.router.navigate(['/categoryRest']);
        }
    }

}

