import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    {
      icono: 'assets/gota.png',
      nombre: 'Hematología',
      descripcion: 'Estudios de sangre para evaluar la salud general y detectar diversas condiciones.'
    },
    {
      icono: 'assets/tubo-sangre.png',
      nombre: 'Química sanguínea',
      descripcion: 'Análisis de componentes químicos en la sangre para evaluar el funcionamiento del organismo.'
    },
    {
      icono: 'assets/microscopio.png',
      nombre: 'Microbiología',
      descripcion: 'Identificación de microorganismos para el diagnóstico y tratamiento de infecciones.'
    },
    {
      icono: 'assets/corazon.png',
      nombre: 'Inmunología',
      descripcion: 'Pruebas especializadas para evaluar el sistema inmunológico y detectar enfermedades.'
    },
    {
      icono: 'assets/adn.png',
      nombre: 'Exámenes especializados',
      descripcion: 'Pruebas específicas para diferentes condiciones médicas y necesidades diagnósticas.'
    },
    {
      icono: 'assets/coagulacion.png',
      nombre: 'Coagulación',
      descripcion: 'Pruebas que evalúan la capacidad de la sangre para coagular correctamente.'
    },
    {
      icono: 'assets/microscopica.png',
      nombre: 'Microscópica',
      descripcion: 'Análisis microscópico de muestras para identificar células, parásitos u otras estructuras.'
    },
    {
      icono: 'assets/genetica.png',
      nombre: 'Genética molecular',
      descripcion: 'Pruebas moleculares para el diagnóstico y estudio de enfermedades genéticas.'
    }
  ];
}
