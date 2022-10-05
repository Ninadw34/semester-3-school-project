package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import entity.Bericht;

@Repository
public interface BerichtRepository extends CrudRepository<Bericht, Integer>{

}
