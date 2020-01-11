import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    formLogin: FormGroup;
    showPassowrd: boolean;
    enviando: boolean;
    msgErro: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.formLogin = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    doLogin() {
        this.enviando = true;
        this.authService.doLogin(this.formLogin.value).subscribe(
            res => {
                this.enviando = false;
                this.authService.setToken(res.blob.toString());
                this.router.navigate(['/candidato']);
            },
            err => {
                this.enviando = false;
                this.msgErro =`${err.status}: ${JSON.parse(err._body).error}`;
            }
        );
    }
}