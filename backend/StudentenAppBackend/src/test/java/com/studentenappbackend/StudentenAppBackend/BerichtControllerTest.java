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
import entity.Bericht;
import entity.StudentenVereniging;
import repository.BerichtRepository;
import service.BerichtService;

class BerichtControllerTest {

	@InjectMocks
	BerichtService berSer;
	
	@Mock
	BerichtRepository berRep;
	
	Bar barTest;
	StudentenVereniging stvTest;
	
	
	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	void getAllBerichtTest() {
		List<Bericht> berichten = new ArrayList<Bericht>();
		berichten.add(new Bericht(1, stvTest, barTest, 5, "Tekst 1"));
		berichten.add(new Bericht(4, stvTest, barTest, 2, "Tekst 2"));
		berichten.add(new Bericht(2, stvTest, barTest, 13, "Tekst 3"));
		berichten.add(new Bericht(11, stvTest, barTest, 1, "Tekst 4"));
		berichten.add(new Bericht(17, stvTest, barTest, 10, "Tekst 5"));
		berichten.add(new Bericht(13, stvTest, barTest, 6, "Tekst 6"));
		
		when(berSer.getAll()).thenReturn(berichten);
		
		List<Bericht> berichtList = berSer.getAll();
		
		assertNotNull(berichtList);
		assertEquals(6, berichtList.size());
	}
	
	@Test
	void addBerichtTest() {
		Bericht newBericht = new Bericht(2, stvTest, barTest, 13, "Dit is een test");
		
		berSer.addBericht(newBericht);
		
		assertNotNull(newBericht);
		assertThat(newBericht.BerichtID).isGreaterThan(0);
		assertEquals(2, newBericht.BerichtID);
		assertEquals(13, newBericht.AantalLikes);
		assertEquals("Dit is een test", newBericht.Text);
	}
	
	@Test
	void getBerichtByIDTest() {
		
		Bericht newBericht = new Bericht(8, stvTest, barTest, 11, "Kom naar onze bar!");
		when(berRep.findById(8)).thenReturn(Optional.of(newBericht));
		
		Bericht bericht = berSer.getByID(8);
		
		assertNotNull(newBericht);
		assertThat(newBericht.BerichtID).isGreaterThan(0);
		assertEquals(8, bericht.GetID());
	}
	
	@Test
	void deleteBerichtTest() {
		Bericht newBericht = new Bericht(3, stvTest, barTest, 26, "Gratis bier");
		when(berRep.findById(3)).thenReturn(Optional.of(newBericht));
		
		assertNotNull(newBericht);
		assertThat(newBericht.BerichtID).isGreaterThan(0);
		
		berSer.deleteBericht(3);
		
		verify(berRep).deleteById(newBericht.GetID());
	}
	
	@Test
	void updateBerichtTest() {
		Bericht newBericht = new Bericht(45, stvTest, barTest, 7, "Gratis cocktails");
		
		assertNotNull(newBericht);
		assertEquals(45, newBericht.BerichtID);
		assertEquals(7, newBericht.AantalLikes);
		assertEquals("Gratis cocktails", newBericht.Text);
		
		newBericht.SetLikes(9);
		newBericht.SetText("Cocktails voor 1,50 euro!");
		
		berSer.updateBericht(newBericht);
		
		assertEquals(9, newBericht.AantalLikes);
		assertEquals("Cocktails voor 1,50 euro!", newBericht.Text);
	}

}
