package fr.adaming.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;

/**
 * @author inti0210
 *
 */

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "clients")
public class ClientEcom extends Personne{

	/**
	 * Attributs
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_client;
	private String mail;
	private String telephone;
	private String voie;
	private String ville;
	private int codePostal;
	@OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Commande> listeCommande=new ArrayList<Commande>();

	/**
	 * Constructeur vide
	 */
	public ClientEcom() {
	
	}


	/**
	 * Constructeur avec paramètres sans id
	 * 
	 * @param nom
	 * @param prenom
	 * @param mail
	 * @param telephone
	 */
	public ClientEcom(String nom, String prenom, String mail, String telephone) {
		super(nom, prenom);
		this.mail = mail;
		this.telephone = telephone;
	}

	/**
	 * Constructeur avec paramètres et id
	 * 
	 * @param nom
	 * @param prenom
	 * @param id_client
	 * @param mail
	 * @param telephone
	 */
	public ClientEcom(String nom, String prenom, int id_client, String mail, String telephone) {
		super(nom, prenom);
		this.id_client = id_client;
		this.mail = mail;
		this.telephone = telephone;
	}

	/**
	 * Getters et Setters
	 */
	/**
	 * @return the id_client
	 */
	public int getId_client() {
		return id_client;
	}

	/**
	 * @param id_client
	 *            the id_client to set
	 */
	public void setId_client(int id_client) {
		this.id_client = id_client;
	}

	/**
	 * @return the listeCommande
	 */
	public List<Commande> getListeCommande() {
		return listeCommande;
	}


	/**
	 * @param listeCommande the listeCommande to set
	 */
	public void setListeCommande(List<Commande> listeCommande) {
		this.listeCommande = listeCommande;
	}


	/**
	 * @return the mail
	 */
	public String getMail() {
		return mail;
	}

	/**
	 * @param mail
	 *            the mail to set
	 */
	public void setMail(String mail) {
		this.mail = mail;
	}

	/**
	 * @return the telephone
	 */
	public String getTelephone() {
		return telephone;
	}

	/**
	 * @param telephone
	 *            the telephone to set
	 */
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	/**
	 * @return the voie
	 */
	public String getVoie() {
		return voie;
	}

	/**
	 * @param voie the voie to set
	 */
	public void setVoie(String voie) {
		this.voie = voie;
	}

	/**
	 * @return the ville
	 */
	public String getVille() {
		return ville;
	}

	/**
	 * @param ville the ville to set
	 */
	public void setVille(String ville) {
		this.ville = ville;
	}

	/**
	 * @return the codePostal
	 */
	public int getCodePostal() {
		return codePostal;
	}

	/**
	 * @param codePostal the codePostal to set
	 */
	public void setCodePostal(int codePostal) {
		this.codePostal = codePostal;
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
		return "Client [id_client=" + id_client + ", mail=" + mail + ", telephone=" + telephone + ", getNom()="
				+ getNom() + ", getPrenom()=" + getPrenom() + "]";
	}


}
