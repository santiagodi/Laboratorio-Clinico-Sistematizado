import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  telefono = '(6) 746 2504';
  whatsapp = '573137166521';

  direccion = 'Carrera 13 # 1N-35, Armenia, Quindío';
  aniosExperiencia = 20;

  abrirWhatsapp() {
    window.open(`https://wa.me/${this.whatsapp}`, '_blank');
  }
}
