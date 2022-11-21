package entity;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="bericht")
public class Bericht {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	public int BerichtID;
	
	@OneToOne(targetEntity=StudentenVereniging.class, fetch=FetchType.EAGER)
	@JoinColumn(name = "idstudentenvereniging")
	public StudentenVereniging StudentenVerenigingID;
	
	@OneToOne(targetEntity=Bar.class, fetch=FetchType.EAGER)
	@JoinColumn(name = "idbar")
	public Bar BarID;
	
	@Column(name = "likes")
	public int AantalLikes;
	
	@Column(name = "text")
	public String Text;
	
	@Column(name = "date")
	public Date Datum;
	
	public Bericht(StudentenVereniging stvid, Bar barid, int likes, String text, Date datum) {
		this.StudentenVerenigingID = stvid;
		this.BarID = barid;
		this.AantalLikes = likes;
		this.Text = text;
		this.Datum = datum;
	}
	public Bericht(int id, StudentenVereniging stvid, Bar barid, int likes, String text) {
		this.BerichtID = id;
		this.StudentenVerenigingID = stvid;
		this.BarID = barid;
		this.AantalLikes = likes;
		this.Text = text;
	}
	
	public Bericht(int berichtid) {
		this.BerichtID = berichtid;
	}
	
	public Bericht() {
		
	}
	public int GetID() {
		return BerichtID;
	}
	
	public void SetID(int id) {
		this.BerichtID = id;
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
	public Date getDatum() {
		return Datum;
	}
	public void setDatum(Date datum) {
		this.Datum = datum;
	}
}
