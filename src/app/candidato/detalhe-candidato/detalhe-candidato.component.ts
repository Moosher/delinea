import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { merge } from '@angular/router/src/utils/collection';
import { CandidatoService } from '../candidato.service';
import { Router, ActivatedRoute } from '@angular/router';
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
    candidato: Candidate;
    showPassword: boolean;
    enviando: boolean;
    msgErro: string;

    constructor(
        private candidatoService: CandidatoService,
        private route: ActivatedRoute,
        private router: Router

    ) { }

    ngOnInit() {

        this.candidato = new Candidate();
        this.route.params.subscribe(
            res => {
                let candidato = res['id'];
                if (candidato) this.candidato = JSON.parse(window.atob(candidato));
                this.loadForm();
            }
        );
        this.loadForm();
    }

    loadForm() {
        this.formCandidato = new FormGroup({
            dadosAcesso: new FormGroup({
                username: new FormControl(this.candidato.username, Validators.required),
                email: new FormControl(this.candidato.email, Validators.required),
                password: new FormControl(null, Validators.required)
            }),
            dadosPessoais: new FormGroup({
                name: new FormControl(this.candidato.name, Validators.required),
                cpf: new FormControl(this.candidato.cpf, Validators.required),
                rg: new FormControl(this.candidato.rg, Validators.required),
                birth_date: new FormControl(null, Validators.required),
                phone: new FormControl(this.candidato.phone, Validators.required),
            })
        });
    }

    enviarDados() {
        let candidato = merge(this.formCandidato.get('dadosPessoais').value, this.formCandidato.get('dadosAcesso').value);
        this.enviando = true;
        this.candidato ? this.cadastrarCandidato(candidato) : this.editarCandidato(candidato, this.candidato.id);
    }

    cadastrarCandidato(candidato) {
        this.candidatoService.cadastrarCandidato(candidato).subscribe(
            res => {
                this.enviando = false;
                this.router.navigate(['/login']);
            },
            err => {
                this.msgErro =`${err.status}: ${err._body}`;
                this.enviando = false;
            }
        );
    }

    editarCandidato(candidato, id: number) {
        this.candidatoService.editarCandidato(candidato, id).subscribe(
            res => {
                this.enviando = false;
                this.router.navigate(['/login']);
            },
            err => {
                this.enviando = false;
                this.msgErro =`${err.status}: ${err._body}`;
            }
        );
    }
}