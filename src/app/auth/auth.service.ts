import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const CLIENT_ID = "QXBs2sW7qIDTnHpJuFiXQsLWpfyeo9iixK0suvpK";
const CLIENT_SECRET = "TmNEOYKR1D5PrNwvGJMyBE2TbZ45OlXLkFgNzdyFsg7FaG3Y7I9njVkWKw4O0IFRRviYzXIDi4ZHem41APoyMDZ4Z1icP1JPEzTxe3uQUFrapy4BLEJXS3hxsqY38ujk";
const GRANT_TYPE = "password";

@Injectable()
export class AuthService {

    token;

    constructor(private http: Http) { }

    doLogin(login) {
        login.client_id = CLIENT_ID;
        login.client_secret = CLIENT_SECRET;
        login.grant_type = GRANT_TYPE;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(
            "https://delineaapi.herokuapp.com/o/token/",
            login,
            { headers: headers }
        );
        // localStorage.setItem("TOKEN", window.btoa(user + ':' + password));
    }
}