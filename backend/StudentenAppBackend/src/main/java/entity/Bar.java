package entity;

import javax.persistence.*;

@Entity
@Table(name="bar")
public class Bar {
	
	@Id
	@Column(name = "idbar")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int BarID;
	
	@Column(name = "barnaam")
	public String BarNaam;
	
	@Column(name = "locatie")
	public String Locatie;
	
	public Bar(int barid, String barnaam, String locatie) {
		this.BarID = barid;
		this.BarNaam = barnaam;
		this.Locatie = locatie;
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
