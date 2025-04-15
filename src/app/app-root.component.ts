import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './services/log.service';




//import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.css'
})
export class AppComponent {
  title = 'techloop';
  private _logger: LoggerService;
  
  constructor(private logger: LoggerService ) {
    this._logger= logger;
    this._logger.log('ho costruito il AppComponent');
  }
}
