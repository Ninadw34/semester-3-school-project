
public class Bericht {
	public int ID;
	public int StudentenVerenigingID;
	public int BarID;
	public int AantalLikes;
	public String Text;
	
	public Bericht(int id, int stvid, int barid, int likes, String text) {
		this.ID = id;
		this.StudentenVerenigingID = stvid;
		this.BarID = barid;
		this.AantalLikes = likes;
		this.Text = text;
	}
}
