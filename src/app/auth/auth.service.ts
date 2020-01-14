import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { AuthData } from './entities/auth-data';

const CLIENT_ID = "Rb6yDNb6muY6Wr9iGybl193VzO6BqOuleLGblg14";
const CLIENT_SECRET = "NjsLaIedGub9LC2xAKHIt7kiN4DiSBLolT74w2PYrOu4PPdRxCNqgZDLS1UlqwSQry2HSmRj21MWcOiKOuLq8UtsD0LBic26SxJAEHqf7AaZ5C6sOSG9WrHf3gOzJkmY";
const GRANT_TYPE = "password";

@Injectable()
export class AuthService {

    token: string;

    constructor(private http: Http) { }

    doLogin(login): Observable<any>{
        let body = new URLSearchParams();
        body.set("client_id", CLIENT_ID)
        body.set("client_secret", CLIENT_SECRET)
        body.set("grant_type", GRANT_TYPE)
        body.set("username", login.email);
        body.set("password", login.password)
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(
            "https://delineaapi.herokuapp.com/o/token/",
            body,
            { headers: headers }
        );
    }

    setToken(token: string) {
        this.token = token;
        localStorage.setItem("TOKEN", token);
    }
}