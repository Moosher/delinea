import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor(
        private authService: AuthService
    ){}

    ngOnInit() {
    }

    doLogin(){
        this.authService.doLogin("candidato", "123").subscribe(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        );
    }
}