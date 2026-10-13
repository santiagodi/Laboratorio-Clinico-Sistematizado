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
  aniosExperiencia = 29;

  puntos = [
    'Profesionales altamente capacitados',
    'Resultados precisos y oportunos',
    'Equipos modernos y tecnología de vanguardia',
    'Atención cercana y personalizada'
  ];

  mision = 'Prestamos servicios de apoyo diagnóstico en laboratorio clínico, satisfaciendo las necesidades de nuestros pacientes y del equipo médico con altos estándares de calidad, tecnología, seguridad y responsabilidad social.';

  vision = 'Para 2028, ser uno de los laboratorios líderes en la región en la prestación de servicios integrales de apoyo diagnóstico e investigación en laboratorio clínico, siendo pioneros en calidad y en la satisfacción de nuestros usuarios.';
}
