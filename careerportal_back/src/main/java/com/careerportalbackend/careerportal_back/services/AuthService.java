package com.careerportalbackend.careerportal_back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.careerportalbackend.careerportal_back.entities.Auth;
import com.careerportalbackend.careerportal_back.entities.User;
import com.careerportalbackend.careerportal_back.repo.AuthRepo;
import com.careerportalbackend.careerportal_back.repo.UserRepo;

@Service
public class AuthService {
    
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AuthRepo authRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Auth registerUser(User user, String password) {
        // userRepo.save(user);
        System.out.println("Passsword is: "+password);
        Auth auth = new Auth();
        auth.setUser(user);
        auth.setEmail(user.getEmail());
        auth.setPassword(passwordEncoder.encode(password)); // Hash password
        // auth.setPassword(password);
        auth.setAuthProvider("local");
        System.out.println("Register user save successful....AuthService");
        return authRepo.save(auth);
    }

    public Auth authenticate(String email, String password) {
        Auth auth = authRepo.findByUserEmail(email);
        if (auth != null && passwordEncoder.matches(password, auth.getPassword())) {
            return auth;
        }
        return null; // Authentication failed
    }

}
