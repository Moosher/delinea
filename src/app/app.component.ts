import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    public authService: AuthService,
    private router: Router
    ){
  
  }

  ngOnInit(){

  }

  sair(){
    this.authService.setToken(null);
    this.router.navigate(['/login']);
  }
}
