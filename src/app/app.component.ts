import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'QuizApp';

  constructor(
    private authService: AuthService
  ) {
    this.isLoggedIn();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
