import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

declare var fetch;
@Injectable()
export class CandidatoService {

    constructor(private http: Http) { }

    deleteCandidato(id: number): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("TOKEN"));
        return this.http.delete(`https://delineaapi.herokuapp.com/candidate/${id}/delete`, { headers: headers });
    }

    getCandidatos(): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get("https://delineaapi.herokuapp.com/candidate/", { headers: headers });
    }

    cadastrarCandidato(candidato): any {
        return new Promise(function (onload, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://delineaapi.herokuapp.com/candidate/', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.responseType = "json";
        xhr.onload = onload;
        xhr.onerror = error;
        xhr.send(JSON.stringify(candidato));
        return xhr.response;
        });
    }

    editarCandidato(candidato, id): any {
        return new Promise(function (onload, error) {
            var xhr = new XMLHttpRequest();
            xhr.open("PATCH", `https://delineaapi.herokuapp.com/candidate/${id}`, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.responseType = "json";
            xhr.onload = onload;
            xhr.onerror = error;
            xhr.send(JSON.stringify(candidato));
            return xhr.response;
            });
    }

}