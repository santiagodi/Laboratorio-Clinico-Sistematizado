import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuAbierto = false;

  telefono = '(6) 746 2504';
  whatsapp = '573137166521';

  enlaces = [
    { texto: 'Inicio', ruta: '#inicio' },
    { texto: 'Nosotros', ruta: '#nosotros' },
    { texto: 'Servicios', ruta: '#servicios' },
    { texto: 'Preanalítica', ruta: '/fase-preanalitica' },
    { texto: 'PQR', ruta: '/pqr' },
    { texto: 'Contacto', ruta: '#contacto' }
  ];

  abrirWhatsapp() {
    window.open(`https://wa.me/${this.whatsapp}`, '_blank');
  }

  irAlInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}
