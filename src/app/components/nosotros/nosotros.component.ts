import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  aniosExperiencia = 20;

  puntos = [
    'Profesionales altamente capacitados',
    'Resultados precisos y oportunos',
    'Equipos modernos y tecnología de vanguardia',
    'Atención cercana y personalizada'
  ];
}
