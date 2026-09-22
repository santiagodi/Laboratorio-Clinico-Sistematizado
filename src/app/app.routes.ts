import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FasePreanaliticaComponent } from './components/fase-preanalitica/fase-preanalitica.component';
import { PqrComponent } from './components/pqr/pqr.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'fase-preanalitica', component: FasePreanaliticaComponent },
  { path: 'pqr', component: PqrComponent },
  { path: '**', redirectTo: '' }
];
