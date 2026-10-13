import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pqr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pqr.component.html',
  styleUrl: './pqr.component.css'
})
export class PqrComponent {
  whatsapp = '573005264929';
  correoDestino = 'santyijaji@gmail.com';

  tipo = 'Petición';
  nombre = '';
  documento = '';
  telefono = '';
  mensaje = '';

  errorMensaje = '';
  enviado = false;

  enviar(destino: 'whatsapp' | 'correo') {
    this.errorMensaje = '';

    if (!this.nombre || !this.documento || !this.telefono || !this.mensaje) {
      this.errorMensaje = 'Todos los campos son obligatorios.';
      return;
    }

    if (destino === 'whatsapp') {
      const texto =
        `*${this.tipo}*\n` +
        `Nombre: ${this.nombre}\n` +
        `Documento: ${this.documento}\n` +
        `Teléfono: ${this.telefono}\n` +
        `Mensaje: ${this.mensaje}`;

      window.open(`https://wa.me/${this.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank');
    } else {
      const asunto = `${this.tipo} - ${this.nombre}`;
      const cuerpo =
        `Nombre: ${this.nombre}\n` +
        `Documento: ${this.documento}\n` +
        `Teléfono: ${this.telefono}\n\n` +
        `Mensaje:\n${this.mensaje}`;

      window.location.href = `mailto:${this.correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    }

    this.enviado = true;
  }
}