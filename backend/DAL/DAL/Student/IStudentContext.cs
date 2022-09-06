using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IStudentContext
    {
        public void AddStudent(StudentDTO student);
        public void UpdateStudent(StudentDTO student);
        public void DeleteStudent(StudentDTO student);
        public int Inloggen(StudentDTO student);
        public void AddBandToLibrary(StudentDTO student);
        public void DeleteBandFromLibrary(StudentDTO student);
        public List<StudentDTO> BandLibrary(int id);
        public List<StudentDTO> GetAll();
        public StudentDTO GetByID(int id);
        public StudentDTO GetByIDKoppeltable(int id);
    }
}
