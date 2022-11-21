package com.studentenappbackend.StudentenAppBackend;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import entity.Student;
import entity.StudentenVereniging;
import repository.StudentRepository;
import service.StudentService;

class StudentControllerTest {

	@InjectMocks
	StudentService studentSer;
	
	@Mock
	StudentRepository studentRep;
	
	StudentenVereniging stvTest;
	
	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	void getAllStudentTest() {
		List<Student> studenten = new ArrayList<Student>();
		studenten.add(new Student(1, "Test gebruiker", "test@gmail.com", "password", stvTest, "admin"));
		studenten.add(new Student(2, "Test gebruiker 2", "test2@gmail.com", "password", stvTest, "student"));
		studenten.add(new Student(5, "Test gebruiker 3", "test3@gmail.com", "password", stvTest, "stv"));
		studenten.add(new Student(8, "Test gebruiker 4", "test4@gmail.com", "password", stvTest, "student"));
		
		when(studentSer.getAll()).thenReturn(studenten);
		
		List<Student> studentList = studentSer.getAll();
		
		assertNotNull(studentList);
		assertEquals(4, studentList.size());
	}
	
	@Test
	void addStudentTest() {
		Student newStudent = new Student(9, "Admin", "testmailtje@gmail.com", "password", stvTest, "admin");
		
		studentSer.addStudent(newStudent);
		
		assertNotNull(newStudent);
		assertThat(newStudent.ID).isGreaterThan(0);
		assertEquals(9, newStudent.ID);
		assertEquals("Admin", newStudent.Naam);
		assertEquals("testmailtje@gmail.com", newStudent.Email);
		assertEquals("admin", newStudent.Role);
	}
	
	@Test
	void getStudentByIDTest() {
		
		Student newStudent = new Student(2, "Studentje", "student@gmail.com", "password", stvTest, "student");
		when(studentRep.findById(2)).thenReturn(Optional.of(newStudent));
		
		Student student = studentSer.getByID(2);
		
		assertNotNull(newStudent);
		assertThat(newStudent.ID).isGreaterThan(0);
		assertEquals(2, student.GetID());
	}
	
	@Test
	void deleteStudentTest() {
		Student newStudent = new Student(7, "Gebruiker", "gebruiker@gmail.com", "password", stvTest, "stv");
		when(studentRep.findById(7)).thenReturn(Optional.of(newStudent));
		
		assertNotNull(newStudent);
		assertThat(newStudent.ID).isGreaterThan(0);
		
		studentSer.deleteStudent(7);
		
		verify(studentRep).deleteById(newStudent.GetID());
	}
	
	@Test
	void updateStudentrTest() {
		Student newStudent = new Student(4, "Test1234", "gekkeemail@gmail.com", "password", stvTest, "student");
		
		assertNotNull(newStudent);
		assertEquals(4, newStudent.ID);
		assertEquals("Test1234", newStudent.Naam);
		assertEquals("gekkeemail@gmail.com", newStudent.Email);
		assertEquals("student", newStudent.Role);
		
		newStudent.SetNaam("Test4321");
		newStudent.SetEmail("gekkeemail@home.nl");
		newStudent.SetRole("stv");
		
		studentSer.updateStudent(newStudent);
		
		assertEquals("Test4321", newStudent.Naam);
		assertEquals("gekkeemail@home.nl", newStudent.Email);
		assertEquals("stv", newStudent.Role);
	}

}
