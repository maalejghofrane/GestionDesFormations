package isi.utm.tn.controller;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Profil;
import isi.utm.tn.services.ProfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api/test")
public class ProfilController {
    @Autowired
    private ProfilService service;

    @PostMapping("/profils")
    public Profil addProfil(@RequestBody Profil Profil) {
        return service.saveProfil(Profil);
    }

    @GetMapping("/profils")
    public List<Profil> findAllProfils() {
        return service.getProfils();
    }

    @GetMapping("/profils/{id}")
    public Profil findProfilById(@PathVariable long id) {
        return service.getProfilById(id);
    }

    @DeleteMapping("/profils/{id}")
    public String deleteProfil(@PathVariable long id) {
        return service.deleteProfil(id);
    }

    @PutMapping("/Profils/{id}")
    public ResponseEntity<Profil> updateProfil(@RequestBody Profil profil, @PathVariable long id) throws ResourceNotFoundException {
        return service.updateProfil(id, profil);
    }


}
