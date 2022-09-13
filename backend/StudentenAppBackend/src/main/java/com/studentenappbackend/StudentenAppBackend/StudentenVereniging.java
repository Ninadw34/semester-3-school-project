package com.studentenappbackend.StudentenAppBackend;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "studentenvereniging")
public class StudentenVereniging {
	
	@Id
	@Column(name = "idstudentenvereniging")
	public int StudentenVerenigingID;
	
	@Column(name = "verenigingnaam")
	public String VerenigingNaam;
	
	@Column(name = "leden")
	public int AantalLeden;
	
	public StudentenVereniging(int stvid, String vnaam, int aantalleden) {
		this.StudentenVerenigingID = stvid;
		this.VerenigingNaam = vnaam;
		this.AantalLeden = aantalleden;
	}
	
	public int GetID() {
		return StudentenVerenigingID;
	}
	public void SetID(int id) {
		this.StudentenVerenigingID = id;
	}
	
	public String GetNaam() {
		return VerenigingNaam;
	}
	
	public void SetNaam(String naam) {
		this.VerenigingNaam = naam;
	}
	
	public int GetAantalLeden() {
		return AantalLeden;
	}
	public void SetAantalLeden(int aantalleden) {
		this.AantalLeden = aantalleden;
	}
}
