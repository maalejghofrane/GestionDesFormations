import { FormateurModel } from './formateur.model';
import { FormationModel } from './formation.model';
import { OrganismeModel } from './organisme.model';
import { ParticipantModel } from './participant.model';

export class SessionFormationModel {
  id: number | undefined;
  formateur: FormateurModel | undefined;
  organisme: OrganismeModel | undefined;
  lieu: String | undefined;
  dateDebut: String | undefined;
  dateFin: String | undefined;
  formation: FormationModel | undefined;
  participants: ParticipantModel[] | undefined;
  nbParticipants: number | undefined;
}
