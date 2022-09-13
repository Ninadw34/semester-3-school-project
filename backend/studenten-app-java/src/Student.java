
public class Student {
	public int ID;
	public int StudentenVerenigingID;
	public String Naam;
	public String Email;
	protected String Password;
	
	public Student(String naam, String email, String password, int stvid) {
		this.Naam = naam;
		this.Email = email;
		this.Password = password;
		this.StudentenVerenigingID = stvid;		
	}
}
