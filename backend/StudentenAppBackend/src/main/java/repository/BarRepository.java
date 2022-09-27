package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import entity.Bar;

@Repository
public interface BarRepository extends CrudRepository<Bar, Integer>{

}
