namespace DAL
{
    public class BarDTO
    {
        public int ID { get; set; }
        public string BarNaam { get; set; }
        public string Locatie { get; set; }

        public BarDTO(int id, string barnaam, string locatie)
        {
            ID = id;
            BarNaam = barnaam;
            Locatie = locatie;
        }
        public BarDTO(int id)
        {
            ID = id;
        }
        public BarDTO()
        {

        }
    }
}