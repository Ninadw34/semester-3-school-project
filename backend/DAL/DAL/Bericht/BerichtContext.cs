using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class BerichtContext : IBerichtContext
    {
        private string conn = ""; // - LAPTOP LOKALE DATABASE
        private string query;

        public void AddBericht(BerichtDTO bericht)
        {

        }
        public void DeleteBericht(BerichtDTO bericht)
        {

        }
        public void UpdateBericht(BerichtDTO bericht)
        {

        }
        public List<BerichtDTO> GetAll()
        {
            return new List<BerichtDTO>();
        }

        public BerichtDTO GetByID(int id)
        {
            BerichtDTO bericht = new BerichtDTO();

            return bericht;
        }
    }
}
