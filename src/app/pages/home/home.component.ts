import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBuilding,
  faFile,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import {
  faChalkboardTeacher,
  faGear,
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerService } from '../../services/theme-changer.service';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

  constructor(private themeService: ThemeChangerService) {}

  protected readonly faUser = faUser;
  protected readonly faFile = faFile;
  protected readonly faBuilding = faBuilding;
  protected readonly faGear = faGear;
  protected readonly faChalkboardTeacher = faChalkboardTeacher;
  protected readonly faHouse = faHouse;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;

  changeTheme() {
    this.themeService.toggleTheme();
  }
}
