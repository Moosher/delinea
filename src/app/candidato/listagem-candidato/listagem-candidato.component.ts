import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { Candidate } from '../entities/candidate';
import { Router } from '@angular/router';

@Component({
    selector: 'listagem-candidato',
    templateUrl: './listagem-candidato.component.html',
    styleUrls: ['./listagem-candidato.component.css']
})
export class ListagemCandidatoComponent implements OnInit {

    candidatos: Array<Candidate>;
    buscando: boolean;
    msgErro: string;
    
    constructor(
        private candidatoService: CandidatoService,
        private router: Router
    ){}

    ngOnInit() {
        this.carregarCandidatos();
    }

    carregarCandidatos() {
        this.buscando = true;
        this.candidatoService.getCandidatos().subscribe(
            res => {
                this.buscando = false;
                this.candidatos = JSON.parse(res._body);
            },
            err => {
                this.buscando = false;
                this.msgErro =`${err.status}: ${err._body}`;
            }
        );
    }

    editCandidato(candidato: Candidate){
        this.router.navigate(["candidato/editar", window.btoa(JSON.stringify(candidato))]);
    }

    deleteCandidato(candidato: Candidate){
        this.buscando = true;
        this.candidatoService.deleteCandidato(candidato.id).subscribe(
            res => {
                this.buscando = false;
                this.carregarCandidatos();
            },
            err => {
                this.buscando = false;
                this.msgErro =`${err.status}: ${err._body}`;
            }
        );
    }
}