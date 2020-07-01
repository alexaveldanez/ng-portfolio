import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalaxyParticlesComponent } from './galaxy-particles/galaxy-particles.component';
import { ParticlesDirective } from './galaxy-particles/particles-directive/particles.directive';
import { ShellComponent } from './navigation/shell/shell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    GalaxyParticlesComponent,
    ParticlesDirective,
    ShellComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
