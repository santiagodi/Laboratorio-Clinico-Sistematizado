import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fase-preanalitica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fase-preanalitica.component.html',
  styleUrl: './fase-preanalitica.component.css'
})
export class FasePreanaliticaComponent {
  indicaciones = [
    {
      titulo: 'Exámenes que requieren ayuno',
      icono: '⏱️',
      detalle: 'Ayuno de 8 a 12 horas antes de la toma de la muestra. Se permite tomar agua.',
      examenes: ['Glicemia en ayunas', 'Perfil lipídico', 'Química sanguínea completa']
    },
    {
      titulo: 'Muestra de sangre',
      icono: '🩸',
      detalle: 'No requieren preparación especial salvo que se indique lo contrario.',
      examenes: ['Hemograma completo', 'Perfil tiroideo', 'Pruebas de coagulación', 'Marcadores tumorales']
    },
    {
      titulo: 'Muestra de orina',
      icono: '🧪',
      detalle: 'Se recomienda la primera orina de la mañana, en frasco estéril.',
      examenes: ['Uroanálisis', 'Urocultivo']
    },
    {
      titulo: 'Muestra de materia fecal',
      icono: '🔬',
      detalle: 'Recolectar en el frasco entregado por el laboratorio, evitando mezclar con orina.',
      examenes: ['Coprocultivo', 'Coproscópico']
    }
  ];

  recomendaciones = [
    'Trae tu documento de identidad',
    'Si tienes orden médica, tráela el día de la toma de muestra',
    'Informa al personal si estás tomando algún medicamento',
    'Si tienes dudas sobre un examen en particular, contáctanos antes de tu visita'
  ];
}
