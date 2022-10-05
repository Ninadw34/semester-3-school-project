package repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import entity.StudentenVereniging;

@Repository
public interface StudentenVerenigingRepository extends CrudRepository<StudentenVereniging, Integer>{

}
