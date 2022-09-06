using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class BerichtDTO
    {
        public int ID { get; set; }
        public int StudentenVerenigingID { get; set; }
        public int BarID { get; set; }
        public string Text { get; set; }

        public BerichtDTO(int id, int svid, int barid, string text)
        {
            ID = id;
            StudentenVerenigingID = svid;
            BarID = barid;
            Text = text;
        }
        public BerichtDTO(int id)
        {
            ID = id;
        }
        public BerichtDTO()
        {

        }
    }
}
