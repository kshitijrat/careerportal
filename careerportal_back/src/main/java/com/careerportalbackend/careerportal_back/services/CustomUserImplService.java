package com.careerportalbackend.careerportal_back.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.careerportalbackend.careerportal_back.entities.Auth;
import com.careerportalbackend.careerportal_back.entities.User;
import com.careerportalbackend.careerportal_back.repo.AuthRepo;
import com.careerportalbackend.careerportal_back.repo.UserRepo;

@Service
public class CustomUserImplService implements UserDetailsService{

    private UserRepo userRepo;
    
    @Autowired
    private AuthRepo authRepo;

    

    public CustomUserImplService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Auth auth = authRepo.findByUserEmail(username);
        if (auth == null) {
            System.out.println("user is null in CustomUserImplSrvice......");
            throw new UsernameNotFoundException("User Not Found with email - "+username);
        }
        List<GrantedAuthority>authorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(auth.getEmail(), auth.getPassword(), authorities);
    }
    
}
