import { DomaineModel } from './domaine.model';
import { SessionFormationModel } from './sessionFormation.model';

export class FormationModel {
  id: number | undefined;
  titre: String | undefined;
  typeFormation: String | undefined;
  duree: String | undefined;
  budget: number | undefined;
  nbSessions: SessionFormationModel[] | undefined;
  domaine: DomaineModel | undefined;
}
