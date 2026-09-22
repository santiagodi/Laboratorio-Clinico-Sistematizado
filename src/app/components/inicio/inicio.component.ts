import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, ServiciosComponent, NosotrosComponent, CtaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {}
