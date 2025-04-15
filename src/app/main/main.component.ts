import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [LoginComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router) {

  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}





