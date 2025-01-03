package com.Safar.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Safar.Entity.Users;
import com.Safar.Repository.User_Repository;

import jakarta.transaction.Transactional;




@Service
@Transactional
public class UsersService {

	@Autowired
	User_Repository User_repo;
	
//	public String Login(String username, String password,int role)
//	{
//		if(User_repo.LoginDetails(username ,password,role)>0)
//		{
//			return "Login Succefully";
//		}
//		return "Invalid User_Id Or Password";
//		
//		
//	}
	
	 public boolean validateLogin(String username, String password) {
	        int a = User_repo.findByUsernameAndPassword(username, password);
	        if(a>0)
	        {
	        	return true;
	        }
	        return false;  
	 }

		
		 public ResponseEntity<String> registerUser(Users user) {
			 
			 System.out.print(user);
		        // Check if the username already exists
		        if (User_repo.findByUsername(user.getUsername())>0) {
		            return new ResponseEntity<>("Username already taken", HttpStatus.BAD_REQUEST);
		        }

		        // Set Role_Id and Account_Status if not provided
		       
		            user.setRole_id(2); // default Role_Id	       
		            user.setAccountstatus(1); // default Account_Status
		        
		        if (user.getFirstname() == null || user.getLastname().isEmpty()) {
		            throw new IllegalArgumentException("First name cannot be null or empty");
		        }

		        // Validate all fields are not null
		        if (user.getUsername() == null || user.getPassword() == null || user.getFirstname() == null ||
		            user.getLastname() == null || user.getContactno() == null || user.getEmail() == null ||
		            user.getAddress() == null) {
		            return new ResponseEntity<>("All fields are required", HttpStatus.BAD_REQUEST);
		        }

		        // Save the new user
		        User_repo.save(user);
		        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
		    }


		public ResponseEntity<String> forgot_Password(String username, String contactno, String email,String password) {
			// TODO Auto-generated method stub
			if(User_repo.findByEmail(username,email,contactno)>0)
			{
				User_repo.updatepassword(username, password);
				return new ResponseEntity<>("Password Updated successfully", HttpStatus.OK);
			}
			return new ResponseEntity<>("Invalid Details", HttpStatus.BAD_REQUEST);
		}
	}
	

