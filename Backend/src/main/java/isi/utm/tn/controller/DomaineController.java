package isi.utm.tn.controller;

import isi.utm.tn.model.Domaine;
import isi.utm.tn.services.DomaineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")

@RequestMapping("/api/test")
public class DomaineController {
    @Autowired
    private DomaineService service;

    @PostMapping("/domaine")
    public Domaine addProduct(@RequestBody Domaine Domaine) {
        return service.saveDomaine(Domaine);
    }
    @GetMapping("/domaines")
    public List<Domaine> findAllDomaines() {
        return service.getDomaines();
    }

    @GetMapping("/domainee/{id}")
    public Domaine findDomaineById(@PathVariable long id) {
        return service.getOrganismById(id);
    }

    @DeleteMapping("/domaine/{id}")

    public String deleteDomaine(@PathVariable long id) {
        return service.deleteDomaine(id);
    }

    @PutMapping("/domaine")
    public Domaine updateDomaine(@RequestBody Domaine Domaine) {
        return service.updateDomaine(Domaine);
    }


}
