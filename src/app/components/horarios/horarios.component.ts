import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent implements OnInit, OnDestroy {
  panelAbierto = false;
  ahora = new Date();
  private intervalo: any;

  cerradoPorEmergencia = false;

  // Festivos de fecha fija. Los que se mueven cada año (Semana Santa,
  // Ascensión, Corpus Christi, Sagrado Corazón) hay que agregarlos a mano.
  diasFestivos: string[] = [
    '2026-01-01', // Año Nuevo
    '2026-05-01', // Día del Trabajo
    '2026-07-20', // Día de la Independencia
    '2026-08-07', // Batalla de Boyacá
    '2026-12-08', // Inmaculada Concepción
    '2026-12-25'  // Navidad
  ];

  horarios = [
    {
      tipo: 'general' as const,
      titulo: 'Atención general',
      texto: 'La jornada de atención general es continua, Desde el lunes a domingo'
    },
    {
      tipo: 'ayunas' as const,
      titulo: 'Exámenes en ayunas',
      texto: 'Lunes a sábado: 6:30 a.m. - 9:30 a.m. · Domingos y festivos: 7:00 a.m. - 9:00 a.m.'
    },
    {
      tipo: 'contacto' as const,
      titulo: 'WhatsApp y llamadas',
      texto: 'Atención las 24 horas, todos los días'
    }
  ];

  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.ahora = new Date();
    }, 60000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  togglePanel() {
    this.panelAbierto = !this.panelAbierto;
  }

  private esDomingoOFestivo(fecha: Date): boolean {
    const esDomingo = fecha.getDay() === 0;
    const fechaISO = fecha.toISOString().split('T')[0];
    const esFestivo = this.diasFestivos.includes(fechaISO);
    return esDomingo || esFestivo;
  }

  estaAbierto(tipo: 'general' | 'ayunas' | 'contacto'): boolean {
    if (tipo === 'general' || tipo === 'contacto') {
      return !this.cerradoPorEmergencia;
    }

    const minutosActuales = this.ahora.getHours() * 60 + this.ahora.getMinutes();
    const esFinDeSemanaEspecial = this.esDomingoOFestivo(this.ahora);

    const inicio = esFinDeSemanaEspecial ? 7 * 60 : 6 * 60 + 30;
    const fin = esFinDeSemanaEspecial ? 9 * 60 : 9 * 60 + 30;
    return minutosActuales >= inicio && minutosActuales <= fin;
  }
}
