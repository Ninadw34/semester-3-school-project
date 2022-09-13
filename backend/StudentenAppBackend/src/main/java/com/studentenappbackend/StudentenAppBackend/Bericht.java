package com.studentenappbackend.StudentenAppBackend;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "bericht")
public class Bericht {
	
	@Id
	@Column(name = "idbericht")
	public int ID;
	
	@Column(name = "idstudentenvereniging")
	public int StudentenVerenigingID;
	
	@Column(name = "idbar")
	public int BarID;
	
	@Column(name = "likes")
	public int AantalLikes;
	
	@Column(name = "text")
	public String Text;
	
	public Bericht(int id, int stvid, int barid, int likes, String text) {
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
	
	public int GetStudentenVerenigingID() {
		return StudentenVerenigingID;
	}
	
	public void SetStudentenVerenigingID(int stvid) {
		this.StudentenVerenigingID = stvid;
	}
	
	public int GetBarID() {
		return BarID;
	}
	
	public void SetBarID(int idbar) {
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
