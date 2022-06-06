package isi.utm.tn.controller;


import isi.utm.tn.model.Formateur;
import isi.utm.tn.model.Organisme;
import isi.utm.tn.services.OrganismeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")


@RestController
@RequestMapping("/api/test")
public class OrganismeController {
    @Autowired
    private OrganismeService service;

    @PostMapping("/organisme")
    public Organisme addOrganisme(@RequestBody Organisme Organisme) {
        return service.saveOrganisme(Organisme);
    }

    @GetMapping("/organisme")
    public List<Organisme> findAllOrganismes() {
        return service.getOrganismes();
    }

    @GetMapping("/organisme/{id}")
    public Organisme findOrganismeById(@PathVariable long id) {
        return service.getOrganismById(id);
    }

    @DeleteMapping("/organisme/{id}")
    public String deleteOrganisme(@PathVariable long id) {
        return service.deleteOrganisme(id);
    }

    @PutMapping("/organisme")
    public Organisme updateProduct(@RequestBody Organisme Organisme) {
        return service.updateOrganisme(Organisme);
    }

    @GetMapping("/formateur/{id}")
    public Set<Formateur> getOrganismes(@PathVariable long id) {
        return service.getFormateurOrganisme(id);
    }

}
