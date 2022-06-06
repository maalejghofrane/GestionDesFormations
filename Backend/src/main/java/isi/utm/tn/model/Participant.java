package isi.utm.tn.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Participant")
public class Participant {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participant_id")
    private Long id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "type")
    private String type;
    @ManyToOne
    @JoinColumn(name = "organisme_id")
    private Organisme organisme;

    @Column(name = "email")
    private String email;
    @Column(name = "tel")
    private String tel;
    @ManyToOne
    @JoinColumn(name = "pays_id")
    private Pays pays;
    @ManyToOne
    @JoinColumn(name = "profil_id")
    private Profil profils;


    @ManyToMany(fetch = FetchType.LAZY)

    @JoinTable(name = "sessionformation_participant",
            joinColumns = @JoinColumn(name = "participant_id"),
            inverseJoinColumns = @JoinColumn(name = "sessionformation_id"))
    private Set<Session_de_formation> sessions = new HashSet<>();


    public Participant() {
        super();
    }


    public Set<Session_de_formation> getSessions() {
        return sessions;
    }





    public Participant(String nom, String prenom, String type, Organisme organisme, String email, String tel,
                       Pays pays,
                       Profil profils) {
        super();
        this.nom = nom;
        this.prenom = prenom;
        this.type = type;
        this.organisme = organisme;
        this.email = email;
        this.tel = tel;
        this.pays = pays;
        this.profils = profils;

    }


    public Profil getProfils() {
        return profils;
    }


    public void setProfils(Profil profils) {
        this.profils = profils;
    }


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


    public Pays getPays() {
        return pays;
    }


    public void setPays(Pays pays) {
        this.pays = pays;
    }


    public Organisme getOrganisme() {
        return organisme;
    }


    public void setOrganisme(Organisme organisme) {
        this.organisme = organisme;
    }
    public void setSessions(Set<Session_de_formation> sessions) {
        this.sessions = sessions;
    }


}