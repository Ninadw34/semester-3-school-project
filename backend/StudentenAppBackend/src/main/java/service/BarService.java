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


	public List<Bar> getAll(){
	      List<Bar> barren = new ArrayList<Bar>();
	      barRep.findAll().forEach(bar -> barren.add(bar));
	      return barren;
	}
	
	public void addBar(Bar bar) {
		barRep.save(bar);
	}
	
	public void deleteBar(int id) {
		barRep.deleteById(id);
	}
	
	public Bar updateBar(Bar bar) {
		return barRep.save(bar);
	}
	public Bar getByID(int id) {
		return barRep.findById(id).get();
	}
	
}
