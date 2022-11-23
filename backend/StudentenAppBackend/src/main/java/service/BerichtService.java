package service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import entity.Bericht;
import entity.StudentenVereniging;
import repository.BerichtRepository;
import repository.StudentenVerenigingRepository;


@Service
@ComponentScan({"repository.BerichtRepository"})
public class BerichtService {
	
	@Autowired
	BerichtRepository berichtRep;
	
	@Autowired
	StudentenVerenigingRepository stvRep;


	public List<Bericht> getAll(){
	      List<Bericht> berichten = new ArrayList<Bericht>();
	      berichtRep.findAll().forEach(bericht -> berichten.add(bericht));
	      return berichten;
	}

	public void addBericht(Bericht bericht) {
		berichtRep.save(bericht);
	}
	
	public void deleteBericht(int id) {
		berichtRep.deleteById(id);
	}
	public Bericht getByID(int id) {
		return berichtRep.findById(id).get();
	}
	public Bericht updateBericht(Bericht bericht) {
		return berichtRep.save(bericht);
	}
}
