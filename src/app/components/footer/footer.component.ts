import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  anioActual = new Date().getFullYear();

  enlacesRapidos = [
    { texto: 'Inicio', ruta: '#inicio' },
    { texto: 'Nosotros', ruta: '#nosotros' },
    { texto: 'Servicios', ruta: '#servicios' },
    { texto: 'Pacientes', ruta: '#pacientes' },
    { texto: 'Resultados', ruta: '#resultados' },
    { texto: 'Contacto', ruta: '#contacto' }
  ];

  servicios = [
    'Hematología',
    'Química sanguínea',
    'Microbiología',
    'Inmunología',
    'Exámenes especializados'
  ];
}