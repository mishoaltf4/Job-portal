import { Component } from '@angular/core';
import { ThemeChangerService } from '../../services/theme-changer.service';

@Component({
  selector: 'app-theme-button',
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css',
})
export class ThemeButtonComponent {
  constructor(public themeService: ThemeChangerService) {}

  changeTheme(): void {
    this.themeService.toggleTheme();
  }
}
