package service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import entity.StudentenVereniging;
import repository.StudentenVerenigingRepository;

@Service
@ComponentScan({"repository.StudentenVerenigingRepository"})
public class StudentenVerenigingService {
	@Autowired
	StudentenVerenigingRepository studentenVerenigingRep;


	public List<StudentenVereniging> getAll(){
	      List<StudentenVereniging> verenigingen = new ArrayList<StudentenVereniging>();
	      studentenVerenigingRep.findAll().forEach(vereniging -> verenigingen.add(vereniging));
	      return verenigingen;
	}
	
	public void addStudentenVereniging(StudentenVereniging studentenvereniging) {
		studentenVerenigingRep.save(studentenvereniging);
	}
	
	public void deleteStudentenVereniging(int id) {
		studentenVerenigingRep.deleteById(id);
	}
	public StudentenVereniging getByID(int id) {
		return studentenVerenigingRep.findById(id).get();
	}
	public StudentenVereniging updateStudentenVereniging(StudentenVereniging studentenvereniging) {
		return studentenVerenigingRep.save(studentenvereniging);
	}
}
