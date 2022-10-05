package com.studentenappbackend.StudentenAppBackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entity.Student;
import service.StudentService;

@RestController
@RequestMapping(path = "/student")
public class StudentController {
	@Autowired
	StudentService studentService;

	   @GetMapping("")
	   public List<Student> GetAllStudenten(){
	      return studentService.GetAll();
	   }

	   @GetMapping("/{id}")
	   public Student GetByID(@PathVariable("id") int id) {
	      return studentService.GetByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void DeleteStudent(@PathVariable("id") int id) {
		   studentService.DeleteBericht(id);
	   }

	   @PostMapping("/addbar")
	   public void AddStudent(@RequestBody Student student) {
		   studentService.AddBericht(student);
	   }
}
