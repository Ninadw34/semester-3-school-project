using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class StudentenVerenigingDTO
    {
        public int ID { get; set; }
        public string Naam { get; set; }
        public int AantalLeden { get; set; }

        public StudentenVerenigingDTO(int id, string naam, int aantalleden)
        {
            ID = id;
            Naam = naam;
            AantalLeden = aantalleden;
        }
        public StudentenVerenigingDTO(int id)
        {
            ID = id;
        }
        public StudentenVerenigingDTO()
        {

        }
    }
}
