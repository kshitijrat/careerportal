package com.careerportalbackend.careerportal_back.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careerportalbackend.careerportal_back.entities.Auth;

public interface AuthRepo extends JpaRepository<Auth, Integer>{

    Auth findByUserEmail(String email);
    
}
