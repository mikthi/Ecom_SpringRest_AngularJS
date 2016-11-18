/**
 * 
 */
package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author inti0210
 *
 */
@Entity
@Table(name = "produits")
public class Produit implements Serializable {

	/**
	 * Attributs
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_produit;
	private String nom;
	private String description;
	private double prix;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_categorie", referencedColumnName = "id_categorie")
	private Categorie categorie;

	/**
	 * Constructeur vide
	 */
	public Produit() {
		categorie=new Categorie();
	}

	/**
	 * Constructeur avec paramètres sans id
	 * 
	 * @param nom
	 * @param description
	 * @param prix
	 */
	public Produit(String nom, String description, float prix) {
		super();
		this.nom = nom;
		this.description = description;
		this.prix = prix;
	}

	/**
	 * Constructeur avec paramètres et id
	 * 
	 * @param id_produit
	 * @param nom
	 * @param description
	 * @param prix
	 */
	public Produit(int id_produit, String nom, String description, float prix) {
		super();
		this.id_produit = id_produit;
		this.nom = nom;
		this.description = description;
		this.prix = prix;
	}

	/**
	 * Getters et Setters
	 */
	/**
	 * @return the id_produit
	 */
	public int getId_produit() {
		return id_produit;
	}

	/**
	 * @param id_produit
	 *            the id_produit to set
	 */
	public void setId_produit(int id_produit) {
		this.id_produit = id_produit;
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
	 * @return the prix
	 */
	public double getPrix() {
		return prix;
	}

	/**
	 * @param prix
	 *            the prix to set
	 */
	public void setPrix(double prix) {
		this.prix = prix;
	}

	/**
	 * @return the categorie
	 */
	public Categorie getCategorie() {
		return categorie;
	}

	/**
	 * @param categorie
	 *            the categorie to set
	 */
	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
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
		return "Produit [id_produit=" + id_produit + ", nom=" + nom + ", description=" + description + ", prix=" + prix
				+ "]";
	}

}
