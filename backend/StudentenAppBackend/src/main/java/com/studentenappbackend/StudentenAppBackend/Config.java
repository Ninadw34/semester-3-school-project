package com.studentenappbackend.StudentenAppBackend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import repository.BarRepository;
import service.BarService;

@Configuration
@EnableJpaRepositories(basePackages = {
	    "repository.BarRepository"
	})
public class Config {
	public Config() {
		
	}
	@Bean(name="barService")
	public BarService barService() {
		return new BarService();
	}
	
}
