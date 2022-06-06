import { OrganismeModel } from './organisme.model';
import { PaysModel } from './pays.model';
import { ProfilModel } from './profil.model';
import { SessionFormationModel } from './sessionFormation.model';

export class ParticipantModel {
  id: number | undefined;
  nom: String | undefined;
  prenom: String | undefined;
  email: String | undefined;
  tel: String | undefined;
  typeParticipant: String | undefined;
  profil: ProfilModel | undefined;
  pays: PaysModel | undefined;
  organisme: OrganismeModel | undefined;
  sessionFormations: SessionFormationModel[] | undefined;
}
