package entity;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	public int ID;
	
	@OneToOne(targetEntity=StudentenVereniging.class, fetch=FetchType.EAGER)
	public StudentenVereniging StudentenVerenigingID;
	
	@Column(name = "naam", unique = true)
	public String Naam;
	
	@Column(name = "email", unique = true)
	public String Email;
	
	@Column(name = "password")
	protected String Password;
	
	@Column(name = "role")
	public String Role;
	
	public Student(String naam, String email, String password, StudentenVereniging stvid, String role) {
		this.Naam = naam;
		this.Email = email;
		this.Password = password;
		this.StudentenVerenigingID = stvid;
		this.Role = role;
	}
	public Student(int id, String naam, String email, String password, StudentenVereniging stvid, String role) {
		this.ID = id;
		this.Naam = naam;
		this.Email = email;
		this.Password = password;
		this.StudentenVerenigingID = stvid;
		this.Role = role;
	}
	public Student(int id) {
		this.ID = id;
	}
	public Student() {
		
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
	public String GetRole() {
		return Role;
	}
	public void SetRole(String role) {
		this.Role = role;
	}
	
}
