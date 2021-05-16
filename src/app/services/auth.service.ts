
import { Injectable, Inject } from '@angular/core';
import { AuthRestApiComponent } from '../rest-api/auth-rest-api/auth-rest-api.component';

@Injectable({ providedIn: 'root' })
export class AuthService {
    
    constructor(
        private authRestApi: AuthRestApiComponent,
        @Inject('BASE_API_URL') private _baseApiUrl: string
    ) {}
    
    login(username: string, password: string): void {
        this.authRestApi.getUser(username, password).subscribe(response => {
            console.log(username);
            console.log(password);
            console.log(response);
            //localStorage.setItem('jwtToken', JSON.stringify(response.token));
        });

        // this.authRestApi.getUser(username, password)
        //     .pipe(
        //         map(response => {
        //             if (response) {
        //                 localStorage.setItem('jwtToken', JSON.stringify(response));
        //                 localStorage.setItem('email', JSON.stringify(response));
        //             }
        //         })
        //     );
    }
}