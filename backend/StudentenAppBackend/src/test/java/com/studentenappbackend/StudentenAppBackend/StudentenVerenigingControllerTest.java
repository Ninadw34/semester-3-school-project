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

import entity.StudentenVereniging;
import repository.StudentenVerenigingRepository;
import service.StudentenVerenigingService;

class StudentenVerenigingControllerTest {

	@InjectMocks
	StudentenVerenigingService stvSer;
	
	@Mock
	StudentenVerenigingRepository stvRep;
	
	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	void getAllStudentenVerenigingenTest() {
		List<StudentenVereniging> stven = new ArrayList<StudentenVereniging>();
		stven.add(new StudentenVereniging(1, "Politka", 55));
		stven.add(new StudentenVereniging(3, "VTK", 96));
		stven.add(new StudentenVereniging(8, "Medica", 84));
		stven.add(new StudentenVereniging(2, "Diana", 400));
		stven.add(new StudentenVereniging(10, "Economika", 22));
		
		when(stvSer.getAll()).thenReturn(stven);
		
		List<StudentenVereniging> stvList = stvSer.getAll();
		
		assertNotNull(stvList);
		assertEquals(5, stvList.size());
	}
	
	@Test
	void addStudentenVerenigingTest() {
		StudentenVereniging newStv = new StudentenVereniging(3, "Test vereniging", 420);
		
		stvSer.addStudentenVereniging(newStv);
		
		assertNotNull(stvSer);
		assertThat(newStv.StudentenVerenigingID).isGreaterThan(0);
		assertEquals(3, newStv.StudentenVerenigingID);
		assertEquals("Test vereniging", newStv.VerenigingNaam);
		assertEquals(420, newStv.AantalLeden);
	}
	
	@Test
	void getStudentenVerenigingByIDTest() {
		
		StudentenVereniging newStv = new StudentenVereniging(2, "VTK", 98);
		when(stvRep.findById(2)).thenReturn(Optional.of(newStv));
		
		StudentenVereniging stv = stvSer.getByID(2);
		
		assertNotNull(newStv);
		assertThat(newStv.StudentenVerenigingID).isGreaterThan(0);
		assertEquals(2, stv.GetID());
	}
	
	@Test
	void deleteStudentenVerenigingTest() {
		StudentenVereniging newStv = new StudentenVereniging(8, "Medica", 78);
		when(stvRep.findById(8)).thenReturn(Optional.of(newStv));
		
		assertNotNull(newStv);
		assertThat(newStv.StudentenVerenigingID).isGreaterThan(0);
		
		stvSer.deleteStudentenVereniging(8);
		
		verify(stvRep).deleteById(newStv.GetID());
	}
	
	@Test
	void updateStudentenVerenigingTest() {
		StudentenVereniging newStv = new StudentenVereniging(10, "Economika", 89);
		
		assertNotNull(newStv);
		assertEquals(10, newStv.StudentenVerenigingID);
		assertEquals("Economika", newStv.VerenigingNaam);
		assertEquals(89, newStv.AantalLeden);
		
		newStv.SetNaam("EconomikaTest");
		newStv.SetAantalLeden(88);
		
		stvSer.updateStudentenVereniging(newStv);
		
		assertEquals("EconomikaTest", newStv.VerenigingNaam);
		assertEquals(88, newStv.AantalLeden);
	}

}
