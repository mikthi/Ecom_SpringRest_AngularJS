/**
 * 
 */
package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Map;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author inti0210
 *
 */
@Entity
@Table(name = "commandes")
public class Commande implements Serializable {

	/**
	 * Attributs
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_commande;
	@Temporal(TemporalType.DATE)
	private Date dateCommande;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_client", referencedColumnName = "id_client")
	Client client;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private Map<Integer,Integer> produitCommande;

	/**
	 * Constructeur vide
	 */
	public Commande() {
		super();
		client= new Client();
		dateCommande= new Date();
		

	}

	/**
	 * @param dateCommande
	 * @param client
	 */
	public Commande(Date dateCommande, Client client) {
		super();
		this.dateCommande = dateCommande;
		this.client = client;
	}

	/**
	 * Constructeur avec paramètres sans id
	 * 
	 * @param dateCommande
	 */
	public Commande(Date dateCommande) {
		super();
		this.dateCommande = dateCommande;
	}

	/**
	 * Constructeur avec paramètres et id
	 * 
	 * @param id_commande
	 * @param dateCommande
	 */
	public Commande(int id_commande, Date dateCommande) {
		super();
		this.id_commande = id_commande;
		this.dateCommande = dateCommande;
	}

	/**
	 * Getters et Setters
	 */
	/**
	 * @return the id_commande
	 */
	public int getId_commande() {
		return id_commande;
	}

	/**
	 * @param id_commande
	 *            the id_commande to set
	 */
	public void setId_commande(int id_commande) {
		this.id_commande = id_commande;
	}


	/**
	 * @return the client
	 */
	public Client getClient() {
		return client;
	}

	/**
	 * @param client the client to set
	 */
	public void setClient(Client client) {
		this.client = client;
	}

	/**
	 * @return the dateCommande
	 */
	public Date getDateCommande() {
		return dateCommande;
	}

	/**
	 * @return the produitCommande
	 */
	public Map<Integer, Integer> getProduitCommande() {
		return produitCommande;
	}

	/**
	 * @param produitCommande the produitCommande to set
	 */
	public void setProduitCommande(Map<Integer, Integer> produitCommande) {
		this.produitCommande = produitCommande;
	}

	/**
	 * @param dateCommande
	 *            the dateCommande to set
	 */
	public void setDateCommande(Date dateCommande) {
		this.dateCommande = dateCommande;
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
		return "Commande [id_commande=" + id_commande + ", dateCommande=" + dateCommande + "]";
	}

}
