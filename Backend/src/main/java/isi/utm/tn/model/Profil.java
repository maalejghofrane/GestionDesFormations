package isi.utm.tn.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "profils")
public class Profil {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idProfil")
    private Long id;
    private String libelle;
    @OneToMany(mappedBy = "profils", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    Set<Participant> participant = new HashSet<>();

    public Profil() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Set<Participant> getParticipant() {
        return participant;
    }

    public void setParticipant(Set<Participant> participant) {
        this.participant = participant;
    }

    public Profil(String libelle) {
        super();
        this.libelle = libelle;
    }
}
