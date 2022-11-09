package com.studentenappbackend.StudentenAppBackend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import entity.Bar;
import repository.BarRepository;
import service.BarService;

@SpringBootTest
public class BarControllerTest {
	
	@InjectMocks
	BarService barSer;
	
	@Mock
	BarRepository barRep;
	
	Bar bar;
	
	@Before(value = "barTest")
	public void setup() {
		MockitoAnnotations.initMocks(bar);
	}
	
	@Test
	public void GetAllBarrenTest() {
		List<Bar> barren = new ArrayList<Bar>();
		barren.add(new Bar(1, "Politka Kaffee", "Leuven"));
		barren.add(new Bar(3, "Recup", "Leuven"));
		barren.add(new Bar(8, "T' Elixier", "Heverlee"));
		
		when(barSer.GetAll()).thenReturn(barren);
		
		List<Bar> barList = barSer.GetAll();
		
		assertNotNull(barList);
		assertEquals(3, barList.size());
		
	}
	
	@Test
	public void GetBarByIDTest() throws Exception {

		when(barSer.GetByID(4)).thenReturn(new Bar(4, "T' Elixier", "Heverlee"));
		
		bar = barSer.GetByID(4);
		
		assertNotNull(bar);
		assertEquals(4, bar.BarID);
		assertEquals("T' Elixier", bar.BarNaam);
		assertEquals("Heverlee", bar.Locatie);
	}

	@Test
	public void AddBarTest() {
		bar = new Bar(2, "Doc's bar", "Leuven");
		
		barSer.AddBar(bar);
		
		assertNotNull(bar);
		assertEquals(2, bar.BarID);
		assertEquals("Doc's bar", bar.BarNaam);
		assertEquals("Leuven", bar.Locatie);
	}
	
	@Test
	public void UpdateBarTest() {
		
	}
	
	@Test
	public void DeleteBarTest() {
		bar = new Bar(5, "Economika", "Leuven");
		
		assertNotNull(bar);
		assertEquals(bar.BarID, 5);
		
		barSer.DeleteBar(5);
		
		assertNull(bar);
		assertNotEquals(bar.BarID, 5);		
	}
}
