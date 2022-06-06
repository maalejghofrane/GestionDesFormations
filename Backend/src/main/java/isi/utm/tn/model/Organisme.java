package isi.utm.tn.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Organisme")
public class Organisme {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private long id;
    @Column(name = "libelle")
    private String libelle;

    @OneToMany(mappedBy = "organisme", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

    Set<Session_de_formation> SessionFormations = new HashSet<>();

    @OneToMany(mappedBy = "organisme", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

    Set<Formateur> formateurs = new HashSet<>();

    public Organisme() {

    }

    @JsonIgnore

    public Set<Session_de_formation> getSessionFormations() {
        return SessionFormations;
    }


    public Organisme(String libelle, Set<Formateur> formateurs) {
        super();
        this.libelle = libelle;
        this.formateurs = formateurs;
    }


    public void setSessionFormations(Set<Session_de_formation> sessionFormations) {
        SessionFormations = sessionFormations;
    }


    @JsonIgnore

    public Set<Formateur> getFormateurs() {
        return formateurs;
    }


    public void setFormateurs(Set<Formateur> formateurs) {
        this.formateurs = formateurs;
    }


    public Organisme(String libelle) {
        super();

        this.libelle = libelle;
    }


    public long getId() {
        return id;
    }


    public void setId(long id) {
        this.id = id;
    }


    public String getLibelle() {
        return libelle;
    }


    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }


    @Override
    public String toString() {
        return "Organisme [id=" + id + ", libelle=" + libelle + "]";
    }


}