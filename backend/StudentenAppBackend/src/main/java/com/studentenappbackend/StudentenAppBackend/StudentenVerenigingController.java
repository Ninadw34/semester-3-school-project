package com.studentenappbackend.StudentenAppBackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entity.StudentenVereniging;
import service.StudentenVerenigingService;

@CrossOrigin
@RestController
@RequestMapping(path = "/studentenvereniging")
public class StudentenVerenigingController {
	@Autowired
	StudentenVerenigingService studentenVerenigingService;

	   @GetMapping("")
	   public List<StudentenVereniging> getAllStudentenVerenigingen(){
	      return studentenVerenigingService.getAll();
	   }

	   @GetMapping("/{id}")
	   public StudentenVereniging getByID(@PathVariable("id") int id) {
	      return studentenVerenigingService.getByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void deleteStudent(@PathVariable("id") int id) {
		   studentenVerenigingService.deleteStudentenVereniging(id);
	   }

	   @PostMapping("/addstudentenvereniging")
	   public void addStudent(@RequestBody StudentenVereniging stv) {
		   studentenVerenigingService.addStudentenVereniging(stv);
	   }
	   
	   @PutMapping("/update/{id}")
	    public StudentenVereniging updateStudentenVereniging
	       (@PathVariable int id, @RequestBody StudentenVereniging studentenverenigingInfo) {
	        
		    StudentenVereniging studentenvereniging = studentenVerenigingService.getByID(id);
		    studentenvereniging.SetNaam(studentenverenigingInfo.GetNaam());
		    studentenvereniging.SetAantalLeden(studentenverenigingInfo.GetAantalLeden());
	        return studentenVerenigingService.updateStudentenVereniging(studentenvereniging);
	    }
}