import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {DomaineComponent} from "./domaine/domaine.component";
import {CreateDomaineComponent} from "./create-domaine/create-domaine.component";
import {UpdateDomaineComponent} from "./update-domaine/update-domaine.component";
import {PaysComponent} from "./pays/pays.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UpdatePaysComponent} from "./update-pays/update-pays.component";
import {HomeComponent} from "./home/home.component";
import {CreatePaysComponent} from "./create-pays/create-pays.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {CreateformateurComponent} from "./createformateur/createformateur.component";
import {CreateProfilsComponent} from "./create-profils/create-profils.component";
import {ProfilsComponent} from "./profils/profils.component";
import {UpdateProfilComponent} from "./update-profil/update-profil.component";
import {OrganismeComponent} from "./organisme/organisme.component";
import {CreateOrganismeComponent} from "./create-organisme/create-organisme.component";
import {UpdateOrganismeComponent} from "./update-organisme/update-organisme.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {UserComponent} from "./user/user.component";
import {MyuserComponent} from "./myuser/myuser.component";
import {CreateParticipantComponent} from "./create-participant/create-participant.component";
import {CreateSeesionFormationsComponent} from "./create-seesion-formations/create-seesion-formations.component";
import {FormateursComponent} from "./formateurs/formateurs.component";
import {UpdateFormateurComponent} from "./update-formateur/update-formateur.component";
import {NgbdCarouselNavigationComponent} from "./ngbd-carousel-navigation/ngbd-carousel-navigation.component";
import {ParticipantComponent} from "./participant/participant.component";
import {UpdateParticipantComponent} from "./update-participant/update-participant.component";
import {FormationsComponent} from "./formations/formations.component";
import {SessionFormationService} from "./services/session-formation.service";
import {SessionFormationComponent} from "./session-formation/session-formation.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full', },
  {path: 'domaines', component: DomaineComponent},
  {path: 'createDomaine', component: CreateDomaineComponent},
  {path: 'updateDomaine/:id', component: UpdateDomaineComponent},
  {path: 'pays', component: PaysComponent},
  {path: 'createPays', component: CreatePaysComponent},
  {path: 'updatePays/:id', component: UpdatePaysComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'side', component: SidenavComponent},
  {path: 'createFormateur', component: CreateformateurComponent},
  {path: 'formateurs', component: FormateursComponent},
  {path: 'profils', component: ProfilsComponent},
  {path: 'createProfil', component: CreateProfilsComponent},
  {path: 'updateProfil/:id', component: UpdateProfilComponent},
  {path: 'organismes', component: OrganismeComponent},
  {path: 'createOrganisme', component: CreateOrganismeComponent},
  {path: 'createUser', component: CreateUserComponent},
  {path: 'updateUsert/:id', component: UpdateUserComponent},
  {path: 'users', component: UserComponent},
  {path: 'myuser', component: MyuserComponent},
  {path: 'createParticipant', component: CreateParticipantComponent},
  {path: 'createSession', component: CreateSeesionFormationsComponent},
  {path:'updateFormateur/:id', component:UpdateFormateurComponent},
  {path:'test',component:NgbdCarouselNavigationComponent},
  {path:'participants',component:ParticipantComponent},
  {path:'updateParticipant',component:UpdateParticipantComponent},
  {path:'users',component:UserComponent},
  {path:'updateUser',component:UpdateUserComponent},
  {path:'formations',component:FormationsComponent},
  {path:'sessionFormation',component:SessionFormationComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routingComponent = [DomaineComponent]

