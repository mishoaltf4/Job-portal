import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faLinkedin, faPinterest, faSquareFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  protected readonly faSquareFacebook = faSquareFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faPinterest = faPinterest;
}
