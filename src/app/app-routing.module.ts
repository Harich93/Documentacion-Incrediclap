import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualUsuarioComponent } from './pages/manual-usuario/manual-usuario.component';
import { DocumentacionFrontendComponent } from './pages/documentacion-frontend/documentacion-frontend.component';

const routes: Routes = [
  { path: '', component: ManualUsuarioComponent }, 
  { path: 'manual-usuario', component: ManualUsuarioComponent },
  { path: 'doc-front', component: DocumentacionFrontendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
