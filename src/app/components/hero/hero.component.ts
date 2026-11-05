import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  telefono = '573137166521';
  whatsapp = '573137166521';

  imagenes = [
    'assets/lab-img-p.jpg',
    'assets/lab-img-3.jpg',
    'assets/lab-img-4.jpg'
  ];
  imagenActual = 0;
  private intervalo: any;

  ngOnInit() {
    this.iniciarCarrusel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  iniciarCarrusel() {
    clearInterval(this.intervalo);
    this.intervalo = setInterval(() => {
      this.imagenActual = (this.imagenActual + 1) % this.imagenes.length;
    }, 5000);
  }

  irAImagen(indice: number) {
    this.imagenActual = indice;
    this.iniciarCarrusel();
  }

  abrirWhatsapp() {
    window.open(`https://wa.me/${this.whatsapp}`, '_blank');
  }
}