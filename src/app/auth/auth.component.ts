import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    formLogin: FormGroup;
    showPassowrd: boolean;
    
    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.formLogin = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    doLogin() {
        this.authService.doLogin(this.formLogin.value).subscribe(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        );
    }
}