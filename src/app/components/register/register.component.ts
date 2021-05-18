import { Component, OnInit } from '@angular/core';
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
    private authService: AuthService
) { }

onSubmit() {
    this.submitted = true;
    this.authService.register(this.model.email, this.model.password);
}

ngOnInit(): void {
}

}
