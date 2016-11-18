/**
 * 
 */
package fr.adaming.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author inti0210
 *
 */
@Entity
@Table(name = "categories")
public class Categorie implements Serializable {

	/**
	 * Attributs
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_categorie;
	private String nom;
	private String description;
	
	@JsonIgnore 
	@OneToMany(mappedBy = "categorie", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Produit> listeProduits= new ArrayList<Produit>();

	/**
	 * Constructeur vide
	 */
	public Categorie() {
		
		super();
		listeProduits= new ArrayList<Produit>();
	}

	/**
	 * Constructeur avec paramètres sans id
	 * 
	 * @param nom
	 * @param description
	 */
	public Categorie(String nom, String description) {
		super();
		this.nom = nom;
		this.description = description;
	}

	/**
	 * Constructeur avec paramètres et id
	 * 
	 * @param id_categorie
	 * @param nom
	 * @param description
	 */
	public Categorie(int id_categorie, String nom, String description) {
		super();
		this.id_categorie = id_categorie;
		this.nom = nom;
		this.description = description;
	}

	/**
	 * Getters et Setters
	 */
	/**
	 * @return the id_categorie
	 */
	public int getId_categorie() {
		return id_categorie;
	}

	/**
	 * @param id_categorie
	 *            the id_categorie to set
	 */
	public void setId_categorie(int id_categorie) {
		this.id_categorie = id_categorie;
	}

	/**
	 * @return the nom
	 */
	public String getNom() {
		return nom;
	}

	/**
	 * @param nom
	 *            the nom to set
	 */
	public void setNom(String nom) {
		this.nom = nom;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description
	 *            the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the listeProduits
	 */
	public List<Produit> getListeProduits() {
		return listeProduits;
	}

	/**
	 * @param listeProduits
	 *            the listeProduits to set
	 */
	public void setListeProduits(List<Produit> listeProduits) {
		this.listeProduits = listeProduits;
	}

	/**
	 * Redéfinition de toString
	 */
	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Categorie [id_categorie=" + id_categorie + ", nom=" + nom + ", description=" + description + "]";
	}

}
