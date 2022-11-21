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

import entity.Bar;
import repository.BarRepository;
import service.BarService;

class BarControllerTest {

	@InjectMocks
	BarService barSer;
	
	@Mock
	BarRepository barRep;
	
	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	void getAllBarTest() {
		List<Bar> barren = new ArrayList<Bar>();
		barren.add(new Bar(1, "Politka Kaffee", "Leuven"));
		barren.add(new Bar(3, "T' Elixier", "Heverlee"));
		barren.add(new Bar(8, "Doc's bar", "Leuven"));
		barren.add(new Bar(2, "T' Archief", "Leuven"));
		
		when(barSer.getAll()).thenReturn(barren);
		
		List<Bar> barList = barSer.getAll();
		
		assertNotNull(barList);
		assertEquals(4, barList.size());
	}
	
	@Test
	void addBarTest() {
		Bar newBar = new Bar(7, "Politka Kaffee", "Leuven");
		
		barSer.addBar(newBar);
		
		assertNotNull(newBar);
		assertThat(newBar.BarID).isGreaterThan(0);
		assertEquals(7, newBar.BarID);
		assertEquals("Politka Kaffee", newBar.BarNaam);
		assertEquals("Leuven", newBar.Locatie);
	}
	
	@Test
	void getBarByIDTest() {
		
		Bar newBar = new Bar(6, "T' Elixier", "Heverlee");
		when(barRep.findById(6)).thenReturn(Optional.of(newBar));
		
		Bar bar = barSer.getByID(6);
		
		assertNotNull(newBar);
		assertThat(newBar.BarID).isGreaterThan(0);
		assertEquals(6, bar.GetID());
	}
	
	@Test
	void deleteBarTest() {
		Bar newBar = new Bar(11, "Doc's bar", "Leuven");
		when(barRep.findById(11)).thenReturn(Optional.of(newBar));
		
		assertNotNull(newBar);
		assertThat(newBar.BarID).isGreaterThan(0);
		
		barSer.deleteBar(11);
		
		verify(barRep).deleteById(newBar.GetID());
	}
	
	@Test
	void updateBarTest() {
		Bar newBar = new Bar(1, "Letteren", "Leuven");
		
		assertNotNull(newBar);
		assertEquals(1, newBar.BarID);
		assertEquals("Letteren", newBar.BarNaam);
		assertEquals("Leuven", newBar.Locatie);
		
		newBar.SetNaam("LetterenTest");
		newBar.SetLocatie("Oud-Heverlee");
		
		barSer.updateBar(newBar);
		
		assertEquals("LetterenTest", newBar.BarNaam);
		assertEquals("Oud-Heverlee", newBar.Locatie);
	}
}
