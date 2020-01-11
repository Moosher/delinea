import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class CandidatoService {

    constructor(private http: Http) { }

    deleteCandidato(id: number): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer '+ localStorage.getItem("TOKEN"));
        return this.http.delete(`https://delineaapi.herokuapp.com/candidate/${id}/delete`, { headers: headers });
    }

    getCandidatos(): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("https://delineaapi.herokuapp.com/candidate/", { headers: headers });
    }

    cadastrarCandidato(candidato) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`https://delineaapi.herokuapp.com/candidate`, candidato, { headers: headers });
    }

    editarCandidato(candidato, id) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(`https://delineaapi.herokuapp.com/candidate/${id}`, candidato, { headers: headers });
    }
    
}