package entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "bericht")
public class Bericht {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int ID;
	
	@Column(name = "idstudentenvereniging")
	public StudentenVereniging StudentenVerenigingID;
	
	@Column(name = "idbar")
	public Bar BarID;
	
	@Column(name = "likes")
	public int AantalLikes;
	
	@Column(name = "text")
	public String Text;
	
	public Bericht(int id, StudentenVereniging stvid, Bar barid, int likes, String text) {
		this.ID = id;
		this.StudentenVerenigingID = stvid;
		this.BarID = barid;
		this.AantalLikes = likes;
		this.Text = text;
	}
	
	public int GetID() {
		return ID;
	}
	
	public void SetID(int id) {
		this.ID = id;
	}
	
	public StudentenVereniging GetStudentenVerenigingID() {
		return StudentenVerenigingID;
	}
	
	public void SetStudentenVerenigingID(StudentenVereniging stvid) {
		this.StudentenVerenigingID = stvid;
	}
	
	public Bar GetBarID() {
		return BarID;
	}
	
	public void SetBarID(Bar idbar) {
		this.BarID = idbar;
	}
	
	public int GetLikes() {
		return AantalLikes;
	}
	
	public void SetLikes(int likes) {
		this.AantalLikes = likes;
	}
	
	public String GetText() {
		return Text;
	}
	
	public void SetText(String text) {
		this.Text = text;
	}
}
