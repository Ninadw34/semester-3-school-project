package entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "student")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int ID;
	
	@Column(name = "idstudentenvereniging")
	public StudentenVereniging StudentenVerenigingID;
	
	@Column(name = "naam")
	public String Naam;
	
	@Column(name = "email")
	public String Email;
	
	@Column(name = "password")
	protected String Password;
	
	public Student(String naam, String email, String password, StudentenVereniging stvid) {
		this.Naam = naam;
		this.Email = email;
		this.Password = password;
		this.StudentenVerenigingID = stvid;		
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
	
	public String GetNaam() {
		return Naam;
	}
	
	public void SetNaam(String naam) {
		this.Naam = naam;
	}
	
	public String GetEmail() {
		return Email;
	}
	
	public void SetEmail(String email) {
		this.Email = email;
	}
	
	public void SetPassword(String password) {
		this.Password = password;
	}
	
}
