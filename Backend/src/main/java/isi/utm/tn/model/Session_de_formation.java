package isi.utm.tn.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Session_de_formation")
public class Session_de_formation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "Date_debut")
    private Date Date_debut;
    @Column(name = "Date_fin")
    private Date Date_fin;
    @Column(name = "Nb_participant")
    private int Nb_participant;
    @Column(name = "lieu")
    private String lieu;


    @ManyToOne
    private Organisme organisme;
    @ManyToOne
    //@JsonBackReference
    private Formateur formateur;
    @ManyToOne

    private Formation formation;


    public Session_de_formation() {
    }

    public Session_de_formation(Date date_debut, Date date_fin, int nb_participant, String lieu,
                                Organisme organisme, Formateur formateur, Formation formation) {
        super();
        Date_debut = date_debut;
        Date_fin = date_fin;
        Nb_participant = nb_participant;
        this.lieu = lieu;

        this.organisme = organisme;
        this.formateur = formateur;
        this.formation = formation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate_debut() {
        return Date_debut;
    }

    public void setDate_debut(Date date_debut) {
        Date_debut = date_debut;
    }

    public Date getDate_fin() {
        return Date_fin;
    }

    public void setDate_fin(Date date_fin) {
        Date_fin = date_fin;
    }

    public int getNb_participant() {
        return Nb_participant;
    }

    public void setNb_participant(int nb_participant) {
        Nb_participant = nb_participant;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }


    public Organisme getOrganisme() {
        return organisme;
    }

    public void setOrganisme(Organisme organisme) {
        this.organisme = organisme;
    }

    public Formateur getFormateur() {
        return formateur;
    }

    public void setFormateur(Formateur formateur) {
        this.formateur = formateur;
    }

    public Formation getFormation() {
        return formation;
    }

    public void setFormation(Formation formation) {
        this.formation = formation;
    }


}