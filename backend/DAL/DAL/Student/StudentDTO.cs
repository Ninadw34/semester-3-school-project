using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class StudentDTO
    {
        public int ID { get; set; }
        public string Gebruikersnaam { get; set; }
        public string Email { get; set; }
        public string Wachtwoord { get; set; }
        public int StudentenVerenigingID { get; set; }

        public StudentDTO(int iD, string gebruikersnaam, string email, string wachtwoord, int svid)
        {
            ID = iD;
            Gebruikersnaam = gebruikersnaam;
            Email = email;
            Wachtwoord = wachtwoord;
            StudentenVerenigingID = svid;
        }
        public StudentDTO(int id)
        {
            ID = id;
        }
        public StudentDTO()
        {

        }
    }
}
