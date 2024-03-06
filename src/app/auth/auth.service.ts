import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzF5lrZZ5aCYu9tY2M0Z9CQJc8onVZLA4',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(catchError(error => {
        let errorMessage = 'An unknown error occured.';
        if (!error.error || !error.error.error) {
          return throwError(errorMessage);
        }
        switch (error.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email is already in use.';
        }
        return throwError(errorMessage);
      }));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzF5lrZZ5aCYu9tY2M0Z9CQJc8onVZLA4',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      );
  }
}
