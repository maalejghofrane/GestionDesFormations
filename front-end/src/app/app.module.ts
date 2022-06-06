import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DomaineComponent} from './domaine/domaine.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateDomaineComponent } from './create-domaine/create-domaine.component';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaysComponent } from './pays/pays.component';
import { CreatePaysComponent } from './create-pays/create-pays.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';
import { HomeComponent } from './home/home.component';
import { CreateformateurComponent } from './createformateur/createformateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import { OrganismeComponent } from './organisme/organisme.component';
import { CreateOrganismeComponent } from './create-organisme/create-organisme.component';
import { CreateProfilsComponent } from './create-profils/create-profils.component';
import { ProfilsComponent } from './profils/profils.component';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { UpdateOrganismeComponent } from './update-organisme/update-organisme.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyuserComponent } from './myuser/myuser.component';
import { CreateParticipantComponent } from './create-participant/create-participant.component';
import { CreateSeesionFormationsComponent } from './create-seesion-formations/create-seesion-formations.component';
import { CreateParticipantsSessionsComponent } from './create-participants-sessions/create-participants-sessions.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { NgbdCarouselNavigationComponent } from './ngbd-carousel-navigation/ngbd-carousel-navigation.component';
import {ParticipantComponent} from "./participant/participant.component";
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { FormationsComponent } from './formations/formations.component';
import { UpdateFormationComponent } from './services/update-formation/update-formation.component';
import { SessionFormationComponent } from './session-formation/session-formation.component';
import { UpdateSessionFormationComponent } from './update-session-formation/update-session-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DomaineComponent,
    CreateDomaineComponent,
    UpdateDomaineComponent,
    NavBarComponent,
    PaysComponent,
    CreatePaysComponent,
    UpdatePaysComponent,
    HomeComponent,
    CreateformateurComponent,
    SidenavComponent,
    OrganismeComponent,
    CreateOrganismeComponent,
    CreateProfilsComponent,
    ProfilsComponent,
    UpdateProfilComponent,
    UpdateOrganismeComponent,
    UserComponent,
    UpdateUserComponent,
    CreateUserComponent,
    MyuserComponent,
    CreateParticipantComponent,
    CreateSeesionFormationsComponent,
    CreateParticipantsSessionsComponent,
    FormateursComponent,
    UpdateFormateurComponent,
    NgbdCarouselNavigationComponent,
    ParticipantComponent,
    UpdateParticipantComponent,
    FormationsComponent,
    UpdateFormationComponent,
    SessionFormationComponent,
    UpdateSessionFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
