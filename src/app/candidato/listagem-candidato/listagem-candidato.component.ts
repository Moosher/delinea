import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { merge } from '@angular/router/src/utils/collection';
import { CandidatoService } from '../candidato.service';
import { Candidate } from '../entities/candidate';

@Component({
    selector: 'listagem-candidato',
    templateUrl: './listagem-candidato.component.html',
    styleUrls: ['./listagem-candidato.component.css']
})
export class ListagemCandidatoComponent implements OnInit {

    candidatos: Array<Candidate>;

    constructor(
        private candidatoService: CandidatoService
    ){}

    ngOnInit() {
        this.carregarCandidatos();
    }

    carregarCandidatos() {
        this.candidatoService.getCandidatos().subscribe(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        );
    }
}