package isi.utm.tn.controller;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Session_de_formation;
import isi.utm.tn.services.SessionFormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api/test")
public class SessionFormationController {
    @Autowired
    private SessionFormationService service;

    @PostMapping("/sessionformation")
    //@PreAuthorize("hasAnyRole('ROLE_USER','ROLE_ADMIN')")
    public Session_de_formation addSessionFormation(@RequestBody Session_de_formation SessionFormation) {
        return service.saveSessionFormation(SessionFormation);
    }

    @GetMapping("/sessionformation")
    public List<Session_de_formation> findAllSessionFormations() {
        return service.getSessionFormations();
    }

    @GetMapping("/sessionformation/{id}")
    public Session_de_formation findSessionFormationById(@PathVariable int id) {
        return service.getOrganismById(id);
    }

    @DeleteMapping("/sessionformation/{id}")
    public String deleteSessionFormation(@PathVariable int id) {
        return service.deleteSessionFormation(id);
    }

    @PutMapping("/sessionformation/{id}")
    public ResponseEntity<Session_de_formation> updateSessionFormation(@RequestBody Session_de_formation SessionFormation, @PathVariable long id) throws ResourceNotFoundException {
        return service.updateSession(id, SessionFormation);


    }
}
