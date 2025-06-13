import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './shared/layout/header/header.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {filter, map, mergeMap} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobs-portal';
  showLayout = true;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activeRoute),
      map(activeRoute => {
        while (activeRoute.firstChild) activeRoute = activeRoute.firstChild;
        return activeRoute;
      }),
      mergeMap(activeRoute => activeRoute.data),
    ).subscribe(
      data => {
        this.showLayout = data['layout'] !== 'none';
      }
    );
  }
}
