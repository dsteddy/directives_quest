import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { NgIf } from '@angular/common';
import { DisplayGuestsDirective } from './display-guests.directive';
import { ChangeColorSizeDirective } from './change-color-size.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightDirective, NgIf, DisplayGuestsDirective, ChangeColorSizeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showMovies:boolean = true;
}
