package isi.utm.tn.controller;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Participant;
import isi.utm.tn.services.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://localhost:4200")
public class ParticipantController {
    @Autowired
    private ParticipantService service;

    @PostMapping("/participant")
    public Participant addProduct(@RequestBody Participant Participant) {
        return service.saveParticipant(Participant);
    }

    @GetMapping("/participant")
    public List<Participant> findAllParticipants() {
        return service.getParticipants();
    }

    @GetMapping("/participant/{id}")
    public Participant findParticipantById(@PathVariable int id) {
        return service.getOrganismById(id);
    }

    @DeleteMapping("/participant/{id}")
    public String deleteParticipant(@PathVariable int id) {
        return service.deleteParticipant(id);
    }

    @PutMapping("/participant/{id}")
    public ResponseEntity<Participant> updateParticipant(@RequestBody Participant Participant, @PathVariable long id) throws ResourceNotFoundException {
        return service.updateParticipant(Participant, id);
    }


}
