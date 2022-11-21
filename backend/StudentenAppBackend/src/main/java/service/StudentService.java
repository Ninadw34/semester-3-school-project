package service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import entity.Bericht;
import entity.Student;
import repository.StudentRepository;

@Service
@ComponentScan({"repository.StudentRepository"})
public class StudentService {
	@Autowired
	StudentRepository studentRep;


	public List<Student> getAll(){
	      List<Student> studenten = new ArrayList<Student>();
	      studentRep.findAll().forEach(student -> studenten.add(student));
	      return studenten;
	}
	
	public void addStudent(Student student) {
		studentRep.save(student);
	}
	
	public void deleteStudent(int id) {
		studentRep.deleteById(id);
	}
	public Student getByID(int id) {
		return studentRep.findById(id).get();
	}
	public Student updateStudent(Student student) {
		return studentRep.save(student);
	}
}
