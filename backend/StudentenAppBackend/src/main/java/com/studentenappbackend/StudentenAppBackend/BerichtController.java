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

import entity.Bericht;
import service.BerichtService;
@CrossOrigin
@RestController
@RequestMapping(path = "/bericht")
public class BerichtController {
	 @Autowired
	   BerichtService berichtService;

	   @GetMapping("")
	   public List<Bericht> getAllBerichten(){
	      return berichtService.getAll();
	   }

	   @GetMapping("/{id}")
	   public Bericht getByID(@PathVariable("id") int id) {
	      return berichtService.getByID(id);
	   }

	   @DeleteMapping("/delete/{id}")
	   public void deleteBericht(@PathVariable("id") int id) {
		   berichtService.deleteBericht(id);
	   }

	   @PostMapping("/addbericht")
	   public void addBericht(@RequestBody Bericht bar) {
		   berichtService.addBericht(bar);
	   }
	   @PutMapping("/update/{id}")
	    public Bericht updateBericht
	       (@PathVariable int id, @RequestBody Bericht berichtInfo) {
	        
	        Bericht bar = berichtService.getByID(id);
	        bar.SetText(berichtInfo.GetText());
	        bar.SetLikes(berichtInfo.GetLikes());
	        bar.setDatum(berichtInfo.getDatum());
	        return berichtService.updateBericht(bar);
	    }
}
