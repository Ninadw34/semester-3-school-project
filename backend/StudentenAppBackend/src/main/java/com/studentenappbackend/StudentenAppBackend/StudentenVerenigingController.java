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

import entity.Bar;
import entity.StudentenVereniging;
import service.StudentenVerenigingService;

@CrossOrigin
@RestController
@RequestMapping(path = "/studentenvereniging")
public class StudentenVerenigingController {
	@Autowired
	StudentenVerenigingService studentenVerenigingService;

	   @GetMapping("")
	   public List<StudentenVereniging> GetAllStudentenVerenigingen(){
	      return studentenVerenigingService.GetAll();
	   }

	   @GetMapping("/{id}")
	   public StudentenVereniging GetByID(@PathVariable("id") int id) {
	      return studentenVerenigingService.GetByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void DeleteStudent(@PathVariable("id") int id) {
		   studentenVerenigingService.DeleteStudentenVereniging(id);
	   }

	   @PostMapping("/addstudentenvereniging")
	   public void AddStudent(@RequestBody StudentenVereniging stv) {
		   studentenVerenigingService.AddStudentenVereniging(stv);
	   }
	   
	   @PutMapping("/update/{id}")
	    public StudentenVereniging UpdateStudentenVereniging
	       (@PathVariable int id, @RequestBody StudentenVereniging studentenverenigingInfo) {
	        
		    StudentenVereniging studentenvereniging = studentenVerenigingService.GetByID(id);
		    studentenvereniging.SetNaam(studentenverenigingInfo.GetNaam());
		    studentenvereniging.SetAantalLeden(studentenverenigingInfo.GetAantalLeden());
	        return studentenVerenigingService.UpdateStudentenVereniging(studentenvereniging);
	    }
}