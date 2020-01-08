import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    token;

    constructor(private http: Http) {}

    doLogin(user, password){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("https://delineaapi.herokuapp.com/o/token/",
        {
            'client_id': 'QXBs2sW7qIDTnHpJuFiXQsLWpfyeo9iixK0suvpK',
            'client_secret' :'TmNEOYKR1D5PrNwvGJMyBE2TbZ45OlXLkFgNzdyFsg7FaG3Y7I9njVkWKw4O0IFRRviYzXIDi4ZHem41APoyMDZ4Z1icP1JPEzTxe3uQUFrapy4BLEJXS3hxsqY38ujk',
            'grant_type':'password',
            'username': user,
            'password': password,
        },
         {headers: headers}
        );
        // localStorage.setItem("TOKEN", window.btoa(user + ':' + password));
    }
}