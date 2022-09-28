package com.studentenappbackend.StudentenAppBackend;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import repository.BarRepository;
import service.BarService;

@Configuration
public class config {

	@Bean
	public BarService barService() {
		return new BarService();
	}
}
