import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
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
        private authService: AuthService
    ) { }
    
    onSubmit() {
        this.submitted = true;
        console.log(this.model);
        this.authService.login(this.model.email, this.model.password);
    }
    
    ngOnInit(): void {
    }

}

