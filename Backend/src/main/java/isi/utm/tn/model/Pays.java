package isi.utm.tn.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Pays")

public class Pays {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_pays")
    public long id;
    @Column(name = "nom")
    public String nom;
    @OneToMany(mappedBy = "pays", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    @NotFound(action = NotFoundAction.IGNORE)

    Set<Participant> participant = new HashSet<>();

    public Pays() {

    }

    public Pays(long id, String nom) {
        super();
        this.id = id;
        this.nom = nom;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }


    @Override
    public String toString() {
        return "Pays [id=" + id + ", nom=" + nom + "]";
    }


}
