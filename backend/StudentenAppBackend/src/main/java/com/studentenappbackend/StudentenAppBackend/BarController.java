package com.studentenappbackend.StudentenAppBackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entity.Bar;
import service.BarService;

@CrossOrigin
@RestController
@RequestMapping(path = "/bar")
public class BarController {

	   @Autowired
	   BarService barService;

	   @GetMapping("")
	   public List<Bar> GetAllBarren(){
	      return barService.GetAll();
	   }

	   @GetMapping("/{id}")
	   public Bar GetByID(@PathVariable("id") int id) {
	      return barService.GetByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void DeleteBar(@PathVariable("id") int id) {
	      barService.DeleteBar(id);
	   }

	   @PostMapping("/addbar")
	   public void AddBar(@RequestBody Bar bar) {
	      barService.AddBar(bar);
	   }
	   
	   @PutMapping("/update/{id}")
	    public Bar UpdateBar
	       (@PathVariable int id, @RequestBody Bar barInfo) {
	        
	        Bar bar = barService.GetByID(id);
	        bar.SetNaam(barInfo.GetNaam());
	        bar.SetLocatie(barInfo.GetLocatie());
	        return barService.UpdateBar(bar);
	    }

}
