package com.studentenappbackend.StudentenAppBackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	   public List<Bar> getAllBarren(){
	      return barService.getAll();
	   }

	   @GetMapping("/{id}")
	   public Bar getByID(@PathVariable("id") int id) {
	      return barService.getByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void deleteBar(@PathVariable("id") int id) {
	      barService.deleteBar(id);
	   }

	   @PostMapping("/addbar")
	   public void addBar(@RequestBody Bar bar) {
	      barService.addBar(bar);
	   }
	   
	   @PutMapping("/update/{id}")
	    public Bar updateBar
	       (@PathVariable int id, @RequestBody Bar barInfo) {
	        
	        Bar bar = barService.getByID(id);
	        bar.SetNaam(barInfo.GetNaam());
	        bar.SetLocatie(barInfo.GetLocatie());
	        return barService.updateBar(bar);
	    }

}
