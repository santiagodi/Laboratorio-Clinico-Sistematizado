import { Component, isStandalone } from '@angular/core';
import { HorariosComponent } from '../horarios/horarios.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [HorariosComponent, CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {
  telefono = '3137166521';
  whatsapp = '573137166521';
  correo = 'santyijaji@gmail.com';

  abrirWhatsapp() {
    window.open(`https://wa.me/${this.whatsapp}`, '_blank');
  }

  mensajeCopiado = false;

  copiarTelefono() {
    navigator.clipboard.writeText(this.telefono);
      this.mensajeCopiado = true;
      setTimeout(() => {
        this.mensajeCopiado = false;
      }, 2000);
  }

  abrirCorreo() {
  window.open(`mailto:${this.correo}`, '_blank');
  }
}
