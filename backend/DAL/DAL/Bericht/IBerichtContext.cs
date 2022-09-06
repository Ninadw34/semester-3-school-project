using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IBerichtContext
    {
        public void AddBericht(BerichtDTO berichtDTO);
        public void DeleteBericht(BerichtDTO berichtDTO);
        public void UpdateBericht(BerichtDTO berichtDTO);
        public List<BerichtDTO> GetAll();
        public BerichtDTO GetByID(int id);
    }
}
