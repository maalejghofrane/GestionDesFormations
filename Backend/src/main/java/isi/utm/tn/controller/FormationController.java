package isi.utm.tn.controller;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Formation;
import isi.utm.tn.services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api/test")
public class FormationController {
    @Autowired
    private FormationService service;

    @PostMapping("/formation")
    public Formation addFormation(@RequestBody Formation Formation) {
        return service.saveFormation(Formation);
    }

    @GetMapping("/formation")
    public List<Formation> findAllFormations() {
        return service.getFormations();
    }

    @GetMapping("/formation/{id}")
    public Formation findFormationById(@PathVariable int id) {
        return service.getOrganismById(id);
    }

    @DeleteMapping("/formation/{id}")
    public String deleteFormation(@PathVariable int id) {
        return service.deleteFormation(id);
    }

    @PutMapping("/formation/{id}")
    public ResponseEntity<Formation> updateFormation(@RequestBody Formation Formation, @PathVariable long id) throws ResourceNotFoundException {
        return service.updateFormation(id, Formation);
    }


}
