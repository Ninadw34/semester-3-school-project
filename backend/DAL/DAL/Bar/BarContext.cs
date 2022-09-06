using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class BarContext : IBarContext
    {
        private string conn = ""; // - LAPTOP LOKALE DATABASE
        private string query;

        public void AddBar(BarDTO bar)
        {

        }
        public void DeleteBar(BarDTO bar)
        {

        }
        public void UpdateBar(BarDTO bar)
        {

        }
        public List<BarDTO> GetAll()
        {
            return new List<BarDTO>();
        }

        public BarDTO GetByID(int id)
        {
            BarDTO bar = new BarDTO();

            return bar;
        }
    }
}
