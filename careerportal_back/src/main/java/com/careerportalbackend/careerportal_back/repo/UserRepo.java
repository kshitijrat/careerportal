package com.careerportalbackend.careerportal_back.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.careerportalbackend.careerportal_back.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{

    User findByEmail(String username);
    
}
