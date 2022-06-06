package isi.utm.tn.services;

import isi.utm.tn.exception.ResourceNotFoundException;
import isi.utm.tn.model.Formateur;
import isi.utm.tn.repositories.FormateurRepository;
import isi.utm.tn.repositories.OrganismeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class FormateurService {
    @Autowired
    private FormateurRepository repository;
    @Autowired
    private OrganismeRepository organismerepo;

    public Formateur saveFormateur(@Validated @RequestBody Formateur formateur) {
        return repository.save(formateur);
    }

    public List<Formateur> getFormateurs() {
        return repository.findAll();
    }

    public Formateur getFormateurById(long id) {
        return repository.findById((long) id).orElse(null);
    }

    public Formateur getOrganismById(int id) {
        return repository.findById((long) id).orElse(null);
    }

    public String deleteFormateur(long id) {
        repository.deleteById((long) id);
        return "Formation removed !! " + id;
    }

    public ResponseEntity<Formateur> updateFormateur(
            @PathVariable(value = "id") long id,
            @RequestBody Formateur formateurDetails) throws ResourceNotFoundException {
        Formateur existingFormateur = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("profil introuvable avec le code = " + id));


        existingFormateur.setNom(formateurDetails.getNom());
        existingFormateur.setPrenom(formateurDetails.getPrenom());
        existingFormateur.setEmail(formateurDetails.getEmail());
        existingFormateur.setTel(formateurDetails.getTel());

        existingFormateur.setType(formateurDetails.getType());


        existingFormateur.setOrganisme(formateurDetails.getOrganisme());

        final Formateur updatedFormateur = repository.save(existingFormateur);
        return ResponseEntity.ok(updatedFormateur);
    }
}
