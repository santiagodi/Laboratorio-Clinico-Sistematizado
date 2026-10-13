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
      titulo: 'Muestra de sangre',
      icono: '🩸',
      detalle: 'Es la muestra más común. Incluye estudios de hematología, química clínica, hormonas, coagulación, inmunología e infecciosas, y marcadores tumorales, entre otros.',
      examenes: ['Hematología', 'Química clínica', 'Hormonas', 'Coagulación', 'Inmunología e infecciosas', 'Marcadores tumorales']
    },
    {
      titulo: 'Muestra de orina',
      icono: '🧪',
      detalle: 'Se recomienda la primera orina de la mañana, en el frasco entregado por el laboratorio.',
      examenes: ['Uroanálisis', 'Electrolitos en orina']
    },
    {
      titulo: 'Muestra de materia fecal',
      icono: '🔬',
      detalle: 'Recolectar en el frasco entregado por el laboratorio, evitando mezclar con orina.',
      examenes: ['Coproanálisis']
    },
    {
      titulo: 'Exámenes que pueden requerir ayuno',
      icono: '⏱️',
      detalle: 'Algunos exámenes de química clínica, como la glicemia y el perfil lipídico, suelen requerir ayuno de 8 a 12 horas. Confirma este dato con el laboratorio al momento de agendar tu examen.',
      examenes: ['Glicemia', 'Perfil lipídico (colesterol y triglicéridos)']
    }
  ];

  recomendaciones = [
    'Trae tu documento de identidad',
    'Si tienes orden médica, tráela el día de la toma de muestra',
    'Informa al personal si estás tomando algún medicamento',
    'Si tienes dudas sobre un examen en particular, contáctanos antes de tu visita'
  ];
}
