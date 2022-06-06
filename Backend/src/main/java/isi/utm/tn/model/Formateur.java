package isi.utm.tn.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Formateur")
public class Formateur {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "email")
    private String email;
    @Column(name = "tel")
    private String tel;
    @Column(name = "type")
    private String type;


    @OneToMany(mappedBy = "formateur", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

    Set<Session_de_formation> sessionFormations = new HashSet<>();


    @ManyToOne(cascade = CascadeType.MERGE)

    private Organisme organisme;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @JsonIgnore
    public Set<Session_de_formation> getSessionFormations() {
        return sessionFormations;
    }

    public void setSessionFormations(Set<Session_de_formation> sessionFormations) {
        this.sessionFormations = sessionFormations;
    }

    public Organisme getOrganisme() {
        return organisme;
    }

    public Formateur(Long id, String nom, String prenom, String email, String tel, String type, Organisme organisme) {
        super();
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.type = type;
        this.organisme = organisme;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public Formateur() {

    }

    public void setOrganisme(Organisme organisme) {
        this.organisme = organisme;
    }

}
