package com.careerportalbackend.careerportal_back.controllers;

import com.careerportalbackend.careerportal_back.config.JwtProvider;
import com.careerportalbackend.careerportal_back.dto.AuthResponse;
import com.careerportalbackend.careerportal_back.dto.LoginRequest;
import com.careerportalbackend.careerportal_back.dto.SignupRequest;
import com.careerportalbackend.careerportal_back.entities.Auth;
import com.careerportalbackend.careerportal_back.entities.User;
import com.careerportalbackend.careerportal_back.repo.AuthRepo;
import com.careerportalbackend.careerportal_back.repo.UserRepo;
import com.careerportalbackend.careerportal_back.services.AuthService;
import com.careerportalbackend.careerportal_back.services.CustomUserImplService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserImplService customUserImplService;

    @Autowired
    private AuthService authService;

    @Autowired
    private AuthRepo authRepo;

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@RequestBody SignupRequest signupRequest) throws Exception {
        try {
            System.out.println("\nEnter in AuthController Signup........");

            // Check if the user is already registered
            if (authRepo.findByUserEmail(signupRequest.getEmail()) != null) {
                return new ResponseEntity<>(new AuthResponse("User already registered", "Error"),
                        HttpStatus.BAD_REQUEST);
            }

            User user = new User();
            user.setFirstName("Kshitij");
            user.setLastName("Ratnawat");
            user.setEmail(signupRequest.getEmail());
            user.setPhone("9685748596");
            user.setLocation("Indore");
            user.setTitle("Software Engineer");
            user.setAbout("I am a Full Stack Java Developer");
            user = userRepo.save(user);
            // Save user & auth
            System.out.println("user: \n" + user.toString());
            authService.registerUser(user, signupRequest.getPassword());

            Authentication authentication = new UsernamePasswordAuthenticationToken(signupRequest.getEmail(),
                    signupRequest.getPassword());
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Generate JWT token
            String token = jwtProvider.generateToken(authentication);

            // Return the token and success message
            AuthResponse authResponse = new AuthResponse(token, "Signup Success");
            System.out.println("Signup Success........");
            return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(new AuthResponse("Signup failed: " + e.getMessage(), "Error"),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        try {
            System.out.println("\nEnter in AuthController login........");

            // Fetch user by email
            Auth auth = authRepo.findByUserEmail(loginRequest.getEmail());
            if (auth == null) {
                System.out.println("auth is null i.e. this email is not register....");
                return new ResponseEntity<>(new AuthResponse(null, "User not found"), HttpStatus.UNAUTHORIZED);
            }

            // Verify password
            if (!passwordEncoder.matches(loginRequest.getPassword(), auth.getPassword())) {
                System.out.println("Login Failed! Password Not Match....");
                return new ResponseEntity<>(new AuthResponse(null, "Invalid password"), HttpStatus.UNAUTHORIZED);
            }

            // Authenticate user
            Authentication authentication = authenticate(auth.getUser().getEmail(), loginRequest.getPassword());
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Generate JWT token
            String token = jwtProvider.generateToken(authentication);
            System.out.println("\nToken: "+token+"\n");
            // Return success response with token
            AuthResponse authResponse = new AuthResponse(token, "Login Success");

            System.out.println("Login success...");

            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new AuthResponse(null, "Login failed: " + e.getMessage()),
                    HttpStatus.BAD_REQUEST);
        }
    }

    private Authentication authenticate(String email, String password) {
        UserDetails userDetails = customUserImplService.loadUserByUsername(email);
        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}