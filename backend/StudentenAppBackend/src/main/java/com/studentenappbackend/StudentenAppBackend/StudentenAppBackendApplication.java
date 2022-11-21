package com.studentenappbackend.StudentenAppBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EnableJpaRepositories(basePackages="repository")
@EntityScan("entity")

public class StudentenAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentenAppBackendApplication.class, args);
		
		
	}

}
