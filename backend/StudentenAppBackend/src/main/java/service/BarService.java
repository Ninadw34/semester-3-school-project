package service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;


import entity.Bar;
import repository.BarRepository;

@Service
@ComponentScan({"repository.BarRepository"})
public class BarService {
	
	@Autowired
	BarRepository barRep;


	public List<Bar> GetAll(){
	      List<Bar> barren = new ArrayList<Bar>();
	      barRep.findAll().forEach(bar -> barren.add(bar));
	      return barren;
	}
	
	public void AddBar(Bar bar) {
		barRep.save(bar);
	}
	
	public void DeleteBar(int id) {
		barRep.deleteById(id);
	}
	
	public Bar UpdateBar(Bar bar) {
		return barRep.save(bar);
	}
	public Bar GetByID(int id) {
		return barRep.findById(id).get();
	}
}
