import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentacionFrontendComponent } from './pages/documentacion-frontend/documentacion-frontend.component';
import { ManualUsuarioComponent } from './pages/manual-usuario/manual-usuario.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccordionComponent } from './pages/manual-usuario/accordion/accordion.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AccordionFrontComponent } from './pages/documentacion-frontend/accordion-front/accordion-front.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualUsuarioComponent,
    DocumentacionFrontendComponent,
    NavBarComponent,
    FooterComponent,
    AccordionComponent,
    ModalComponent,
    AccordionFrontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
