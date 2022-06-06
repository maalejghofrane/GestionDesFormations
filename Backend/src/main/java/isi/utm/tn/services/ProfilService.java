package isi.utm.tn.services;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Profil;
import isi.utm.tn.repositories.ProfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ProfilService {
    @Autowired
    private ProfilRepository repository;

    public Profil saveProfil(Profil Profil) {
        return repository.save(Profil);
    }

    public List<Profil> getProfils() {
        return repository.findAll();
    }

    public Profil getProfilById(long id) {
        return repository.findById((long) id).orElse(null);
    }

    public String deleteProfil(long id) {
        repository.deleteById((long) id);
        return "Profil removed !! " + id;
    }

    public ResponseEntity<Profil> updateProfil(
            @PathVariable(value = "id") long id,
            @RequestBody Profil profilDetails) throws ResourceNotFoundException {
        Profil existingProfil = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("profil introuvable avec le code = " + id));

        existingProfil.setLibelle(profilDetails.getLibelle());

        final Profil updatedProfil = repository.save(existingProfil);
        return ResponseEntity.ok(updatedProfil);
    }

}