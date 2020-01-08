import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { merge } from '@angular/router/src/utils/collection';
import { CandidatoService } from '../candidato.service';
import { Candidate } from '../entities/candidate';

@Component({
    selector: 'detalhe-candidato',
    templateUrl: './detalhe-candidato.component.html',
    styleUrls: ['./detalhe-candidato.component.css']
})
export class DetalheCandidatoComponent implements OnInit {

    formCandidato: FormGroup;
    typePass: string;
    step: boolean;

    constructor(
        private candidatoService: CandidatoService
    ){}

    ngOnInit() {
        this.formCandidato = new FormGroup({
            dadosAcesso: new FormGroup({
                username: new FormControl(null, Validators.required),
                email: new FormControl(null, Validators.required),
                password: new FormControl(null, Validators.required)
            }),
            dadosPessoais: new FormGroup({
                name: new FormControl(null, Validators.required),
                cpf: new FormControl(null, Validators.required),
                rg: new FormControl(null, Validators.required),
                birth_date: new FormControl(null, Validators.required),
                phone: new FormControl(null, Validators.required),
            })
        });

    }

    enviarDados() {
        let candidato = merge(this.formCandidato.get('dadosPessoais').value, this.formCandidato.get('dadosAcesso').value);
        this.candidatoService.cadastrarCandidato(candidato).subscribe(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        );
    }
}