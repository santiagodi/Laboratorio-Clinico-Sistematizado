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
  whatsapp = '573137166521';

  tipo = 'Petición';
  nombre = '';
  documento = '';
  telefono = '';
  mensaje = '';

  errorMensaje = '';
  enviado = false;

  enviar() {
    this.errorMensaje = '';

    if (!this.nombre || !this.documento || !this.telefono || !this.mensaje) {
      this.errorMensaje = 'Todos los campos son obligatorios.';
      return;
    }

    const texto =
      `*${this.tipo}*\n` +
      `Nombre: ${this.nombre}\n` +
      `Documento: ${this.documento}\n` +
      `Teléfono: ${this.telefono}\n` +
      `Mensaje: ${this.mensaje}`;

    const url = `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');

    this.enviado = true;
  }
}
