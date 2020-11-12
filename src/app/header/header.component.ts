import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  isAuth() { return this.autService.isAuthenticated(); }
  onLogout() { this.autService.logout(); this.router.navigate(['/iniciosesion']) }
}
