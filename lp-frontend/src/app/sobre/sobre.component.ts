import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html'
})
export class SobreComponent {

  linkedin() {
    window.location.href = 'https://www.linkedin.com/in/jean-fernandine';
  }

  github() {
    window.location.href = 'https://www.github.com/fernandine';
  }
}
