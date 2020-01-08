import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidatoService {

    constructor(private http: Http){}

    cadastrarCandidato(candidato){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("https://delineaapi.herokuapp.com/candidate/", candidato, {headers: headers});
    }
0
}