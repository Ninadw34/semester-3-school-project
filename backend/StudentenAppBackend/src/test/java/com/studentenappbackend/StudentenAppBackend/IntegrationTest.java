package com.studentenappbackend.StudentenAppBackend;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;



@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(locations="classpath:application-test.properties")
class IntegrationTest {

	@Autowired
	private MockMvc mockMvc;

	
	// Bar controller testen
	
	@Test
	public void getListOfBarren() throws Exception {
		
		mockMvc.perform(MockMvcRequestBuilders.get("/bar/"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.size()").value(3))
				.andDo(MockMvcResultHandlers.print());

	}
	
	@Test
	public void getBarById() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/bar/1"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.BarID").value(1))
				.andExpect(jsonPath("$.BarNaam").value("Docsbar"))
				.andExpect(jsonPath("$.Locatie").value("Leuven"))
				.andDo(MockMvcResultHandlers.print());	
	}
	
	// Bericht controller testen
	
	@Test
	public void getListOfBerichten() throws Exception {
		
		mockMvc.perform(MockMvcRequestBuilders.get("/bericht/"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.size()").value(3))
				.andDo(MockMvcResultHandlers.print());

	}
	
	@Test
	public void getBerichtById() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/bericht/2"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.BerichtID").value(2))
				.andExpect(jsonPath("$.BarID.BarNaam").value("Letteren"))
				.andExpect(jsonPath("$.StudentenVerenigingID.VerenigingNaam").value("Politika"))
				.andDo(MockMvcResultHandlers.print());	
	}
	
	// Student controller testen
	
	@Test
	public void getListOfStudenten() throws Exception {
		
		mockMvc.perform(MockMvcRequestBuilders.get("/student/"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.size()").value(1))
				.andDo(MockMvcResultHandlers.print());

	}
	
	@Test
	public void getStudentById() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/student/1"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.ID").value(1))
				.andExpect(jsonPath("$.Naam").value("Nina"))
				.andExpect(jsonPath("$.StudentenVerenigingID.VerenigingNaam").value("Economika"))
				.andDo(MockMvcResultHandlers.print());	
	}
	
	// Studentenvereniging controller testen
	
	@Test
	public void getListOfStudentenVerenigingen() throws Exception {
		
		mockMvc.perform(MockMvcRequestBuilders.get("/studentenvereniging/"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.size()").value(4))
				.andDo(MockMvcResultHandlers.print());

	}
	
	@Test
	public void getStudentenVerenigingById() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/studentenvereniging/3"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().contentType("application/json"))
				.andExpect(jsonPath("$.StudentenVerenigingID").value(3))
				.andExpect(jsonPath("$.VerenigingNaam").value("VTK"))
				.andExpect(jsonPath("$.AantalLeden").value(100))
				.andDo(MockMvcResultHandlers.print());	
	}

}
