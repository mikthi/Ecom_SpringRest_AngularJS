package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="roles")
public class Role implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_role;
	
	private String roleName;
	@ManyToOne
	@JoinColumn(name="id_gestionnaire", referencedColumnName="id_gestionnaire")
	private Gestionnaire gestionnaire;
	
	
	
	
	/**
	 * @param id
	 * @param roleName
	 * @param gestionnaire
	 */
	public Role(int id_role, String roleName, Gestionnaire gestionnaire) {
		super();
		this.id_role = id_role;
		this.roleName = roleName;
		this.gestionnaire = gestionnaire;
	}
	/**
	 * @param roleName
	 * @param gestionnaire
	 */
	public Role(String roleName, Gestionnaire gestionnaire) {
		super();
		this.roleName = roleName;
		this.gestionnaire = gestionnaire;
	}
	/**
	 * 
	 */
	public Role() {
		super();
	}
	public int getId_role() {
		return id_role;
	}
	public void setId_role(int id_role) {
		this.id_role = id_role;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public Gestionnaire getGestionnaire() {
		return gestionnaire;
	}
	public void setGestionnaire(Gestionnaire gestionnaire) {
		this.gestionnaire = gestionnaire;
	}
	
	
	
	

	
	
}
