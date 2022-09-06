using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IBarContext
    {
        public void AddBar(BarDTO barDTO);
        public void DeleteBar(BarDTO barDTO);
        public void UpdateBar(BarDTO barDTO);
        public List<BarDTO> GetAll();
        public BarDTO GetByID(int id);
    }
}
