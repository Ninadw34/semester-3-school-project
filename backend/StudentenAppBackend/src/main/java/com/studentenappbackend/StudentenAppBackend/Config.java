package com.studentenappbackend.StudentenAppBackend;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

import repository.BarRepository;
import service.BarService;
import service.BerichtService;
import service.StudentService;
import service.StudentenVerenigingService;

@Configuration
public class config {

	@Bean
	public BarService barService() {
		return new BarService();
	}
	
	@Bean
	public BerichtService berichtService() {
		return new BerichtService();
	}
	
	@Bean
	public StudentService studentService() {
		return new StudentService();
	}
	
	@Bean
	public StudentenVerenigingService studentenVerenigingService() {
		return new StudentenVerenigingService();
	}

}
