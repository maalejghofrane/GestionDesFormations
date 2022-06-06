package isi.utm.tn.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Formation")
@Data
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "titre")
    private String titre;
    @Column(name = "type_formation")
    private String type_formation;
    @Column(name = "annee")
    private int annee;
    @Column(name = "nb_session")
    private int nb_session;
    @Column(name = "duree")
    private int duree;
    @Column(name = "budget")
    private int budget;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "formation", cascade = CascadeType.ALL)
    Set<Session_de_formation> sessionFormation = new HashSet<>();
    @ManyToOne
    private Domaine domaine;


    public Formation() {

    }

    public Formation(String titre, String type_formation, int annee, int nb_session, int duree, int budget,
                     Set<Session_de_formation> sessionFormation, Domaine domaine) {
        super();
        this.titre = titre;
        this.type_formation = type_formation;
        this.annee = annee;
        this.nb_session = nb_session;
        this.duree = duree;
        this.budget = budget;
        this.sessionFormation = sessionFormation;
        this.domaine = domaine;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getType_formation() {
        return type_formation;
    }

    public void setType_formation(String type_formation) {
        this.type_formation = type_formation;
    }

    public int getAnnee() {
        return annee;
    }

    public void setAnnee(int annee) {
        this.annee = annee;
    }

    public int getNb_session() {
        return nb_session;
    }

    public void setNb_session(int nb_session) {
        this.nb_session = nb_session;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }

    public int getBudget() {
        return budget;
    }

    public void setBudget(int budget) {
        this.budget = budget;
    }

    @JsonIgnore
    public Set<Session_de_formation> getSessionFormation() {
        return sessionFormation;
    }

    public void setSessionFormation(Set<Session_de_formation> sessionFormation) {
        this.sessionFormation = sessionFormation;
    }

    public Domaine getDomaine() {
        return domaine;
    }

    public void setDomaine(Domaine domaine) {
        this.domaine = domaine;
    }


}