package isi.utm.tn.controller;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Formateur;
import isi.utm.tn.services.FormateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/test")
public class FormateurController {
    @Autowired
    private FormateurService service;

    @PostMapping("/formateurs")
    public Formateur addFormateur(@RequestBody Formateur Formateur) {
        return service.saveFormateur(Formateur);
    }

    @GetMapping("/formateurs")
    public List<Formateur> findAllFormateurs() {
        return service.getFormateurs();
    }

    @GetMapping("/formateurs/{id}")
    public Formateur findFormateurById(@PathVariable int id) {
        return service.getOrganismById(id);
    }

    @DeleteMapping("/formateurs/{id}")
    public String deleteFormateur(@PathVariable int id) {
        return service.deleteFormateur(id);
    }

    @PutMapping("/formateurs/{id}")
    public ResponseEntity<Formateur> updateFormateur(@RequestBody Formateur Formateur, @PathVariable long id) throws ResourceNotFoundException {
        return service.updateFormateur(id, Formateur);
    }
}
