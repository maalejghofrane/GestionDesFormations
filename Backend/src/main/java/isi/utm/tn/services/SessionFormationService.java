package isi.utm.tn.services;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Session_de_formation;
import isi.utm.tn.repositories.SessionFormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class SessionFormationService {
    @Autowired
    private SessionFormationRepository repository;

    public Session_de_formation saveSessionFormation(Session_de_formation SessionFormation) {
        return repository.save(SessionFormation);
    }

    public List<Session_de_formation> getSessionFormations() {
        return repository.findAll();
    }

    public Session_de_formation getOrganismById(int id) {
        return repository.findById((long) id).orElse(null);
    }

    public String deleteSessionFormation(int id) {
        repository.deleteById((long) id);
        return "SessionFormation removed !! " + id;
    }

    public ResponseEntity<Session_de_formation> updateSession(
            @PathVariable(value = "id") long id,
            @RequestBody Session_de_formation sessionDetails) throws ResourceNotFoundException {
        Session_de_formation existingsession = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("session de formation introuvable avec le code = " + id));

        existingsession.setDate_debut(sessionDetails.getDate_debut());
        existingsession.setDate_fin(sessionDetails.getDate_fin());
        existingsession.setNb_participant(sessionDetails.getNb_participant());
        existingsession.setLieu(sessionDetails.getLieu());

        existingsession.setOrganisme(sessionDetails.getOrganisme());
        existingsession.setFormateur(sessionDetails.getFormateur());
        existingsession.setFormation(sessionDetails.getFormation());


        final Session_de_formation updatedSession = repository.save(existingsession);
        return ResponseEntity.ok(updatedSession);
    }
}