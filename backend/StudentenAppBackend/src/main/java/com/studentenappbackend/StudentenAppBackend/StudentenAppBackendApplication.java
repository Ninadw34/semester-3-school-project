package com.studentenappbackend.StudentenAppBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;



@SpringBootApplication
public class StudentenAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentenAppBackendApplication.class, args);
	}

}