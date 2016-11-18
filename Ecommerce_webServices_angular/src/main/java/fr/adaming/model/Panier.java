/**
 * 
 */
package fr.adaming.model;

import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Component;

/**
 * @author inti0210
 *
 */
@Component
public class Panier {


	private Map<Integer, Integer> produitCommande=new HashMap<Integer,Integer>();
	private double montantTotalPanier;
	

	/**
	 * Constructeur vide
	 */
	public Panier() {
		super();
		produitCommande= new HashMap<Integer,Integer>();
	}

	/**
	 * Constructeur avec paramètre
	 * 
	 * @param produitCommande
	 */
	public Panier(Map<Integer, Integer> produitCommande) {
		super();
		this.produitCommande = produitCommande;
	}

	/**
	 * Getters et Setters
	 */
	/**
	 * @return the produitCommande
	 */
	public Map<Integer, Integer> getProduitCommande() {
		return produitCommande;
	}

	/**
	 * @param produitCommande
	 *            the produitCommande to set
	 */
	public void setProduitCommande(Map<Integer, Integer> produitCommande) {
		this.produitCommande = produitCommande;
	}

	/**
	 * @return the montantTotalPanier
	 */
	public double getMontantTotalPanier() {
		return montantTotalPanier;
	}

	/**
	 * @param montantTotalPanier the montantTotalPanier to set
	 */
	public void setMontantTotalPanier(double montantTotalPanier) {
		this.montantTotalPanier = montantTotalPanier;
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
		return "Panier [produitCommande=" + produitCommande + "]";
	}

}
