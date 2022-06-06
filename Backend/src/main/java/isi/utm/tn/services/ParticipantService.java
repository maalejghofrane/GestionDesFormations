package isi.utm.tn.services;

import isi.utm.tn.model.Participant;
import isi.utm.tn.repositories.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ParticipantService {
    @Autowired
    private ParticipantRepository repository;


    public List<Participant> getParticipants() {
        return repository.findAll();
    }

    public Participant getOrganismById(long id) {
        return repository.findById((long) id).orElse(null);
    }

    public String deleteParticipant(int id) {
        repository.deleteById((long) id);
        return "Participant removed !! " + id;
    }

    public ResponseEntity<Participant> updateParticipant(Participant Participant, @PathVariable(value = "id") long id) {
        Participant existingParticipant = repository.findById((long) Participant.getId()).orElse(null);
        existingParticipant.setNom(Participant.getNom());
        existingParticipant.setPrenom(Participant.getPrenom());
        existingParticipant.setType(Participant.getType());
        existingParticipant.setOrganisme(Participant.getOrganisme());
        ;
        existingParticipant.setEmail(Participant.getEmail());
        existingParticipant.setTel(Participant.getTel());
        ;
        existingParticipant.setPays(Participant.getPays());
        existingParticipant.setProfils(Participant.getProfils());
        existingParticipant.setSessions(Participant.getSessions());
        ;


        final Participant updatedParticipant = repository.save(existingParticipant);

        return ResponseEntity.ok(updatedParticipant);
    }

    public Participant saveParticipant(Participant Participant) {
        Participant.setSessions(Participant.getSessions());
        return repository.save(Participant);

    }
}