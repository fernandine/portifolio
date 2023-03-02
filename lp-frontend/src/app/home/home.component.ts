import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  fazendoDownload = false;

  menuItems = [
    {
command: () => this.scrollToComponent('componente-sobre')
    },
    {
command: () => this.scrollToComponent('componente-habilidades')
    },
    {
command: () => this.scrollToComponent('componente-projetos')
    },
    {
command: () => this.scrollToComponent('componente-contatos')
    }
  ];

  constructor() { }

  fazerDownloadCurriculo() {
    const linkPDF = 'https://drive.google.com/drive/folders/19I2-clVJXlqr36DMPK1O6NGO9kRoNgSn';
    this.fazendoDownload = true;
    setTimeout(() => {
      this.fazendoDownload = false;
      window.open(linkPDF);
    }, 2000);
  }

  scrollToComponent(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
