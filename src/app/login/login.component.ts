import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoggerService } from "../services/log.service"




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  public _nome: string = "";
  public _cognome: string = "";
  private _logger: LoggerService;

  constructor(private router: Router, logger: LoggerService ) {
    this._logger= logger;
    this._logger.log('ho costruito il componente LOGIN');
  }

  // Funzione per navigare alla Dashboard
  navigateToDashboard(event: Event): void {
    this._logger.log('sto per mandare i dati via ROUTER');
    event.preventDefault(); // Impedisce l'invio del form
    this.router.navigate(['/dashboard',{nome: this._nome, cognome: this._cognome}]); // Naviga alla rotta dashboard
  }
  onClick() {
  throw new Error('Method not implemented.');
  }

}





