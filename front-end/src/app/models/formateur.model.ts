import {OrganismeModel} from "./organisme.model";


export class FormateurModel {
  id: number | undefined;
  nom: String | undefined;
  prenom: String|undefined;
  email: String | undefined;
  tel: String | undefined;
  type: String |undefined;
  organisme: OrganismeModel|undefined;
}
