import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarjeta {
  nombre: string;
  tipo: 'paquete' | 'examen';
  grupo?: string;
  icono: string;
  filtros: string[];
  etiquetas: string[];
  preparacion: string[];
  examenes: string[];
}

@Component({
  selector: 'app-fase-preanalitica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fase-preanalitica.component.html',
  styleUrl: './fase-preanalitica.component.css'
})
export class FasePreanaliticaComponent implements OnDestroy {
  filtroActual = 'todos';
  seleccionado: Tarjeta | null = null;

  filtros = [
    { clave: 'todos', texto: 'Todos' },
    { clave: 'examenes', texto: 'Exámenes' },
    { clave: 'paquetes', texto: 'Paquetes' },
    { clave: 'sangre', texto: 'Sangre' },
    { clave: 'orina', texto: 'Orina' },
    { clave: 'materia-fecal', texto: 'Materia fecal' },
    { clave: 'ayuno', texto: 'Con ayuno' }
  ];

  tarjetas: Tarjeta[] = [
    {
      nombre: 'Hemograma completo (cuadro hemático)',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Glicemia en ayunas',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Ayuno de 10 a 12 horas',
        'Puedes tomar agua',
        'No consumas alcohol el día anterior',
        'Si tomas medicamentos para la diabetes, consulta con tu médico cómo manejarlos ese día'
      ],
      examenes: []
    },
    {
      nombre: 'Perfil lipídico',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Ayuno de 10 a 12 horas',
        'Puedes tomar agua',
        'Evita comidas muy grasosas y el alcohol las 24 horas anteriores'
      ],
      examenes: []
    },
    {
      nombre: 'Uroanálisis (parcial de orina)',
      tipo: 'examen',
      icono: '🧪',
      filtros: ['examenes', 'orina'],
      etiquetas: ['Orina'],
      preparacion: [
        'Primera orina de la mañana, si es posible',
        'Usa un frasco fertilizado',
        'Haz aseo de la zona genital y recoge la muestra',
        'Si estás en tu periodo menstrual, avisa al personal'
      ],
      examenes: []
    },
    {
      nombre: 'Urocultivo',
      tipo: 'examen',
      icono: '🧪',
      filtros: ['examenes', 'orina'],
      etiquetas: ['Orina'],
      preparacion: [
        'Primera orina de la mañana, si es posible',
        'Usa un frasco fertilizado',
        'Haz aseo de la zona genital y recoge la muestra',
        'Si estás en tu periodo menstrual, avisa al personal'
      ],
      examenes: []
    },
    {
      nombre: 'Coprológico',
      tipo: 'examen',
      icono: '🔬',
      filtros: ['examenes', 'materia-fecal'],
      etiquetas: ['Materia fecal'],
      preparacion: [
        'Usa un frasco fertilizado',
        'Recoge una muestra reciente, sin mezclar con orina ni agua del inodoro',
        'Evita las grasas en exceso y las verduras de hoja 48 horas antes',
        'Informa si tomas laxantes, antidiarreicos o antibióticos'
      ],
      examenes: []
    },
    {
      nombre: 'Creatinina',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Hemoglobina glicosilada (HbA1c)',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Nitrógeno ureico (BUN)',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'No requiere ayuno',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Ácido úrico',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Evita el alcohol y las comidas muy abundantes en carnes y vísceras el día anterior',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Colesterol total',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Ayuno de 10 a 12 horas',
        'Evita comidas muy grasosas y el alcohol las 24 horas anteriores'
      ],
      examenes: []
    },
    {
      nombre: 'Triglicéridos',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Ayuno de 10 a 12 horas',
        'Evita comidas muy grasosas y el alcohol las 24 horas anteriores'
      ],
      examenes: []
    },
    {
      nombre: 'Colesterol HDL',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Ayuno de 10 a 12 horas',
        'Evita comidas muy grasosas y el alcohol las 24 horas anteriores'
      ],
      examenes: []
    },
    {
      nombre: 'Colesterol LDL',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Ayuno de 10 a 12 horas',
        'Evita comidas muy grasosas y el alcohol las 24 horas anteriores'
      ],
      examenes: []
    },
    {
      nombre: 'Transaminasa ALT (TGP)',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Transaminasa AST (TGO)',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Perfil tiroideo',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '📋',
      filtros: ['paquetes', 'sangre'],
      etiquetas: ['Sangre', 'ayuno'],
      preparacion: [
        'Ayuno de 10 a 12 horas',
        'Si tomas medicamentos para la tiroides, No tomarlo ese dia',
        'Informa si consumes suplementos con biotina (vitamina B7)'
      ],
      examenes: ['TSH', 'T4 libre', 'T3 (según indicación)']
    },
    {
      nombre: 'Perfil de embarazo',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '📋',
      filtros: ['paquetes', 'sangre'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Puedes realizarte la prueba a cualquier hora del día'
      ],
      examenes: ['Beta-hCG cualitativa en sangre', 'Beta-hCG cuantitativa en sangre']
    },
    {
      nombre: 'Perfil infeccioso',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '📋',
      filtros: ['paquetes', 'sangre'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requiere ayuno',
        'Pregunta en el laboratorio si necesitas orden médica para alguna de estas pruebas'
      ],
      examenes: ['VIH', 'Sífilis (VDRL o RPR)', 'Hepatitis B (HBsAg)', 'Hepatitis C (anti-VHC)']
    },
    {
      nombre: 'Bilirrubina total y directa',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Evita el alcohol y el ejercicio intenso 24 horas antes'
      ],
      examenes: []
    },
    {
      nombre: 'Fosfatasa alcalina',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'GGT',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Evita el alcohol 24 horas antes',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Albúmina',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Informa los medicamentos que estás tomando'
      ],
      examenes: []
    },
    {
      nombre: 'Calcio',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Informa si tomas suplementos de calcio o vitamina D'
      ],
      examenes: []
    },
    {
      nombre: 'Ferritina',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Informa si tomas suplementos de hierro'
      ],
      examenes: []
    },
    {
      nombre: 'Vitamina B12',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Informa si tomas suplementos o multivitamínicos'
      ],
      examenes: []
    },
    {
      nombre: 'Vitamina D',
      tipo: 'examen',
      icono: '🩸',
      filtros: ['examenes', 'sangre', 'ayuno'],
      etiquetas: ['Sangre', 'Ayuno'],
      preparacion: [
        'Se recomienda ayuno de 8 horas',
        'Informa si tomas suplementos de vitamina D o calcio'
      ],
      examenes: []
    },
    {
      nombre: 'Materia fecal',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '📋',
      filtros: ['paquetes', 'materia-fecal'],
      etiquetas: ['Materia fecal'],
      preparacion: [
        'Usa el frasco que te entrega el laboratorio',
        'Recoge una muestra reciente, sin mezclar con orina ni agua del inodoro',
        'Evita las grasas en exceso y las verduras de hoja 48 horas antes'
      ],
      examenes: ['Coprológico', 'Coproscópico', 'Sangre oculta en heces']
    },
    {
      nombre: 'Orina',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '🧪',
      filtros: ['paquetes', 'orina'],
      etiquetas: ['Orina'],
      preparacion: [
        'Primera orina de la mañana, si es posible',
        'Usa el recipiente que te entrega el laboratorio',
        'Haz aseo de la zona genital y recoge el chorro medio',
        'Para la orina de 24 horas, pide las instrucciones al laboratorio antes de empezar'
      ],
      examenes: ['Uroanálisis', 'Urocultivo', 'Proteinuria', 'Microalbuminuria', 'Orina de 24 horas']
    },
    {
      nombre: 'Salud femenina',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '♀️',
      filtros: ['paquetes'],
      etiquetas: ['Muestra ginecológica'],
      preparacion: [
        'No tengas relaciones sexuales 48 horas antes',
        'No uses duchas vaginales, óvulos ni cremas vaginales en las 48 horas previas',
        'Evita realizarte el examen durante la menstruación',
        'Informa la fecha de tu última menstruación y si estás embarazada'
      ],
      examenes: ['Frotis vaginal', 'Citología cervicouterina', 'Pruebas de VPH']
    },
    {
      nombre: 'Salud masculina',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '♂️',
      filtros: ['paquetes', 'sangre'],
      etiquetas: ['Sangre', 'Semen'],
      preparacion: [
        'Para el PSA: evita relaciones sexuales y el ejercicio intenso, como el ciclismo o montar a caballo, 48 horas antes',
        'Para el espermograma: abstinencia sexual de 3 días y la muestra se debe recoger Unicamente en el laboratorio',
        'Informa si te hicieron algún procedimiento urológico o tuviste una infección urinaria hace poco'
      ],
      examenes: ['Antígeno prostático específico (PSA)', 'Espermograma']
    },
    {
      nombre: 'Inmunología y serología',
      tipo: 'paquete',
      grupo: 'Paquete',
      icono: '🛡️',
      filtros: ['paquetes', 'sangre'],
      etiquetas: ['Sangre'],
      preparacion: [
        'No requieren ayuno',
        'Informa si tienes una infección o si tomas antiinflamatorios o corticoides'
      ],
      examenes: ['PCR', 'Factor reumatoide', 'ASO']
    }
  ];

  recomendaciones = [
    'Trae tu documento de identidad',
    'Si tienes orden médica, tráela el día de la toma de muestra',
    'Informa al personal si estás tomando algún medicamento',
    'Si tienes dudas sobre un examen en particular, contáctanos antes de tu visita'
  ];

  get tarjetasVisibles(): Tarjeta[] {
    if (this.filtroActual === 'todos') {
      return this.tarjetas;
    }
    return this.tarjetas.filter(t => t.filtros.includes(this.filtroActual));
  }

  elegirFiltro(clave: string) {
    this.filtroActual = clave;
  }

  resumen(tarjeta: Tarjeta): string {
    if (tarjeta.tipo === 'paquete') {
      return (tarjeta.grupo || 'Paquete') + ' · ' + tarjeta.examenes.length + ' exámenes';
    }
    return 'Examen individual';
  }

  abrir(tarjeta: Tarjeta) {
    this.seleccionado = tarjeta;
    document.body.style.overflow = 'hidden';
  }

  cerrar() {
    this.seleccionado = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  alPresionarEscape() {
    this.cerrar();
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}
