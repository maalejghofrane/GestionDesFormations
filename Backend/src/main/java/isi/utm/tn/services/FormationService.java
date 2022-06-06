package isi.utm.tn.services;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Formation;
import isi.utm.tn.repositories.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class FormationService {
    @Autowired
    private FormationRepository repository;

    public Formation saveFormation(Formation Formation) {
        return repository.save(Formation);
    }

    public List<Formation> getFormations() {
        return repository.findAll();
    }

    public Formation getOrganismById(int id) {
        return repository.findById((long) id).orElse(null);
    }

    public String deleteFormation(int id) {
        repository.deleteById((long) id);
        return "Formation removed !! " + id;
    }

    public ResponseEntity<Formation> updateFormation(
            @PathVariable(value = "id") long id,
            @RequestBody Formation formationDetails) throws ResourceNotFoundException {
        Formation existingFormation = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("formation introuvable avec le code = " + id));

        existingFormation.setTitre(formationDetails.getTitre());
        existingFormation.setDomaine(formationDetails.getDomaine());
        existingFormation.setAnnee(formationDetails.getAnnee());
        existingFormation.setType_formation(formationDetails.getType_formation());

        existingFormation.setNb_session(formationDetails.getNb_session());
        existingFormation.setDuree(formationDetails.getDuree());

        existingFormation.setBudget(formationDetails.getBudget());
        final Formation updatedFormation = repository.save(existingFormation);
        return ResponseEntity.ok(updatedFormation);
    }
}