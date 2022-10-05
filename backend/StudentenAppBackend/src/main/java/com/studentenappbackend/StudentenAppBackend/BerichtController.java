package com.studentenappbackend.StudentenAppBackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entity.Bericht;
import service.BerichtService;

@RestController
@RequestMapping(path = "/bericht")
public class BerichtController {
	 @Autowired
	   BerichtService berichtService;

	   @GetMapping("")
	   public List<Bericht> GetAllBerichten(){
	      return berichtService.GetAll();
	   }

	   @GetMapping("/{id}")
	   public Bericht GetByID(@PathVariable("id") int id) {
	      return berichtService.GetByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void DeleteBar(@PathVariable("id") int id) {
		   berichtService.DeleteBericht(id);
	   }

	   @PostMapping("/addbar")
	   public void AddBar(@RequestBody Bericht bar) {
		   berichtService.AddBericht(bar);
	   }
}
