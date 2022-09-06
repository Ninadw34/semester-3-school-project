using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IStudentenVerenigingContext
    {
        public void AddStudentenVereniging(StudentenVerenigingDTO studentenverenigingDTO);
        public void DeleteStudentenVereniging(StudentenVerenigingDTO studentenverenigingDTO);
        public void UpdateStudentenVereniging(StudentenVerenigingDTO studentenverenigingDTO);
        public List<StudentenVerenigingDTO> GetAll();
        public StudentenVerenigingDTO GetByID(int id);
    }
}
