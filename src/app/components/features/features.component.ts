import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  items = [
    {
      icono: 'assets/escudo-seguro.png',
      titulo: 'Resultados confiables',
      descripcion: 'Procesos estandarizados y calidad certificada.'
    },
    {
      icono: 'assets/microscopio.png',
      titulo: 'Tecnología avanzada',
      descripcion: 'Equipos de última generación para diagnósticos precisos.'
    },
    {
      icono: 'assets/usuario.png',
      titulo: 'Atención humana',
      descripcion: 'Trato cercano, respetuoso y profesional.'
    },
    {
      icono: 'assets/tiempo-rapido.png',
      titulo: 'Entrega oportuna',
      descripcion: 'Resultados en el menor tiempo con la mayor precisión.'
    }
  ];
}
