/**
 * 
 */
package fr.adaming.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author inti0210
 *
 */
@Entity
@Table(name = "gestionnaires")
public class Gestionnaire extends Personne implements Serializable {
	/**
	 * Attributs
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_gestionnaire;
	private String password;
	private boolean activated;
	@OneToMany(mappedBy="gestionnaire")
	private List<Role> roles=new ArrayList<Role>();

	/**
	 * Constructeur vide
	 */
	public Gestionnaire() {
	}


	/**
	 * @param id_gestionnaire
	 * @param password
	 * @param activated
	 */
	public Gestionnaire(int id_gestionnaire, String password, boolean activated) {
		super();
		this.id_gestionnaire = id_gestionnaire;
		this.password = password;
		this.activated = activated;

	}

	
	
	
	/**
	 * @param password
	 * @param activated
	 */
	public Gestionnaire(String password, boolean activated) {
		super();
		this.password = password;
		this.activated = activated;

	}


	/**
	 * Getters et Setters
	 */
	/**
	 * @return the id_gestionnaire
	 */
	public int getId_gestionnaire() {
		return id_gestionnaire;
	}

	/**
	 * @param id_gestionnaire
	 *            the id_gestionnaire to set
	 */
	public void setId_gestionnaire(int id_gestionnaire) {
		this.id_gestionnaire = id_gestionnaire;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password
	 *            the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
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
		return "Gestionnaire [id_gestionnaire=" + id_gestionnaire + ", password=" + password + ", getNom()=" + getNom()
				+ ", getPrenom()=" + getPrenom() + "]";
	}

}
