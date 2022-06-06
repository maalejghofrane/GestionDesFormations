package isi.utm.tn.services;

import isi.utm.tn.model.Formateur;
import isi.utm.tn.model.Organisme;
import isi.utm.tn.repositories.OrganismeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class OrganismeService {
    @Autowired
    private OrganismeRepository repository;

    public Organisme saveOrganisme(Organisme organisme) {
        return repository.save(organisme);
    }

    public List<Organisme> getOrganismes() {
        return repository.findAll();
    }

    public Organisme getOrganismById(long id) {
        return repository.findById((long) id).orElse(null);
    }

    public String deleteOrganisme(long id) {
        repository.deleteById((long) id);
        return "Organisme removed !! " + id;
    }

    public Organisme updateOrganisme(Organisme Organisme) {
        Organisme existingOrganisme = repository.findById((long) Organisme.getId()).orElse(null);
        existingOrganisme.setLibelle(Organisme.getLibelle());

        return repository.save(existingOrganisme);
    }

    public Set<Formateur> getFormateurOrganisme(long id) {
        // TODO Auto-generated method stub
        Organisme e = repository.findById(id).get();

        return (Set<Formateur>) e.getFormateurs();
    }

}