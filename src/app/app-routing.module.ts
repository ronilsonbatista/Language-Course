import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NossosCursosComponent } from './nossos-cursos/nossos-cursos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ResultadoComponent } from './resultado/resultado';

const routes: Routes = [
  { path: 'app-nossos-cursos', component: NossosCursosComponent },
  { path: 'app-cadastro', component: CadastroComponent },
  { path: 'app-resultado', component: ResultadoComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NossosCursosComponent,
  CadastroComponent,
  PageNotFoundComponent,
  ResultadoComponent]





