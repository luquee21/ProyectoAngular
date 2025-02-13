import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {
  mensaje = false;
  loginForm: FormGroup;
  userdata: any;
  loading: boolean = false;
  clicked: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.clicked = true;
    this.userdata = this.saveUserdata();
    this.loading=true;
    this.mensaje = false;
    setTimeout(() => {
      this.autService.inicioSesion(this.userdata);
      this.loading = false;
    }, 3000);

    setTimeout(() => {
      if (this.isAuth() === false) { 
        this.mensaje = true 
        this.loading = false;
        this.clicked = false;
      }
    }, 4000);
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    return saveUserdata;
  }

  isAuth() { return this.autService.isAuthenticated(); }
}
