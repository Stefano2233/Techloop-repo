import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  protected _nome: string = '';
  protected _cognome: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private router: Router, activeRoute: ActivatedRoute) {
    let name = activeRoute.snapshot.paramMap.get('nome');
    let surname = activeRoute.snapshot.paramMap.get('cognome');

    this._nome = name==null?"":name;
    this._cognome = surname==null?"":surname;

    this.firstName = this._nome;
    this.lastName = this._cognome;
  }

  navigateToDashboard(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/']);
  }
}

