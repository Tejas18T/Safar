package com.Safar.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Safar.Entity.Company;
import com.Safar.Entity.DummyCompany;
import com.Safar.Repository.CompanyRepository;
import com.Safar.Repository.User_Repository;

@Service
public class Company_Service {

	@Autowired
	CompanyRepository ComRepo;
	
	@Autowired
	User_Repository User_repo;
	
	public List<Company> getallCompany(){
		return ComRepo.findAll();
	}

	public ResponseEntity<String> registerCompnay(Company com) {
		// TODO Auto-generated method stub
		if (User_repo.findByUsername(com.getUser_id().getUsername())>0) {
            return new ResponseEntity<>("Username already taken", HttpStatus.BAD_REQUEST);
        }
		if (User_repo.findByContact(com.getUser_id().getContactno()) > 0) {
            return new ResponseEntity<>("Contact No already register", HttpStatus.BAD_REQUEST);
        }
		// Save the new user
		 com.getUser_id().setFirstname("Company");
		 com.getUser_id().setLastname("Company");
		 com.getUser_id().setRole_id(3); // default Role_Id	       
         com.getUser_id().setAccountstatus(0);
         ComRepo.save(com);
        return new ResponseEntity<>("Compnay registered successfully", HttpStatus.OK);
	}
}
