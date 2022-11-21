package com.studentenappbackend.StudentenAppBackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entity.Student;
import service.StudentService;

@CrossOrigin
@RestController
@RequestMapping(path = "/student")
public class StudentController {
	@Autowired
	StudentService studentService;

	   @GetMapping("")
	   public List<Student> getAllStudenten(){
	      return studentService.getAll();
	   }

	   @GetMapping("/{id}")
	   public Student getByID(@PathVariable("id") int id) {
	      return studentService.getByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void deleteStudent(@PathVariable("id") int id) {
		   studentService.deleteStudent(id);
	   }

	   @PostMapping("/addstudent")
	   public void addStudent(@RequestBody Student student) {
		   studentService.addStudent(student);
	   }
}
