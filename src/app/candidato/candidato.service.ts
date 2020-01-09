import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class CandidatoService {
    
    getCandidatos(): Observable<any> {
        throw new Error("Method not implemented.");
    }

    constructor(private http: Http){}

    cadastrarCandidato(candidato){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("https://delineaapi.herokuapp.com/candidate/", candidato, {headers: headers});
    }
0
}