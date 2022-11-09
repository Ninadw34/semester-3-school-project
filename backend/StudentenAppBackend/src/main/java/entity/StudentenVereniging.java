package entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "studentenvereniging")
public class StudentenVereniging {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idstudentenvereniging")
	public int StudentenVerenigingID;
	
	@Column(name = "verenigingnaam", unique = true)
	public String VerenigingNaam;
	
	@Column(name = "leden")
	public int AantalLeden;
	
	public StudentenVereniging(String vnaam, int aantalleden) {
		this.VerenigingNaam = vnaam;
		this.AantalLeden = aantalleden;
	}
	public StudentenVereniging(int stvid) {
		this.StudentenVerenigingID = stvid;
	}
	public StudentenVereniging() {
		
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
