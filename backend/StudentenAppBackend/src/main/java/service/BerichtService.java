package service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;

import entity.Bericht;
import repository.BerichtRepository;


@Service
@ComponentScan({"repository.BerichtRepository"})
public class BerichtService {
	
	@Autowired
	BerichtRepository berichtRep;


	public List<Bericht> GetAll(){
	      List<Bericht> berichten = new ArrayList<Bericht>();
	      berichtRep.findAll().forEach(bericht -> berichten.add(bericht));
	      return berichten;
	}
	
	public void AddBericht(Bericht bericht) {
		berichtRep.save(bericht);
	}
	
	public void DeleteBericht(int id) {
		berichtRep.deleteById(id);
	}
	public Bericht GetByID(int id) {
		return berichtRep.findById(id).get();
	}
}
