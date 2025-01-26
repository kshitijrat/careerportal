package com.careerportalbackend.careerportal_back.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    private String firstName;
    private String lastName;
    @Column(nullable = false)
    private String email; // Unique constraint if required
    private String password;
    private String phone;
    private String location;
    private String title; // E.g., "Software Engineer"
    private String about;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Address> address = new ArrayList<>();
    // @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    // @JsonIgnore
    // private List<Rating> ratings = new ArrayList<>();
    @Lob
    private byte[] imageData; // User profile picture (if applicable)
    private int profileCompletion; // Percentage of profile completion
}
