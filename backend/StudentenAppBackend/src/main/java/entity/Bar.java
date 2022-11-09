package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Bar {
	
	@Id
	@Column(name = "idbar")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int BarID;
	
	@Column(name = "barnaam", unique = true)
	public String BarNaam;
	
	@Column(name = "locatie")
	public String Locatie;
	
	public Bar(int barid, String barnaam, String locatie) {
		this.BarID = barid;
		this.BarNaam = barnaam;
		this.Locatie = locatie;
	}
	public Bar(String barnaam, String locatie) {
		this.BarNaam = barnaam;
		this.Locatie = locatie;
	}
	public Bar(int barid) {
		this.BarID = barid;
	}
	
	public Bar() {
		
	}
	
	public int GetID() {
		return BarID;
	}
	
	public void SetID(int id) {
		this.BarID = id;
	}
	
	public String GetNaam() {
		return BarNaam;
	}
	
	public void SetNaam(String naam) {
		this.BarNaam = naam;
	}
	
	public String GetLocatie() {
		return Locatie;
	}
	
	public void SetLocatie(String locatie) {
		this.Locatie = locatie;
	}
	
	@Override
	public String toString() {
		return "Bar [BarID="+ BarID +", BarNaam = " + BarNaam +", Locatie="+ Locatie +"]";
	}
}
