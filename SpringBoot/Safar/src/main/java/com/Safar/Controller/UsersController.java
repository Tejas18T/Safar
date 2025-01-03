package com.Safar.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;


import com.Safar.Entity.Forgot_Password;
import com.Safar.Entity.Users;
import com.Safar.Service.UsersService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {

	@Autowired
	UsersService Userser;
	
//	@PostMapping("/Login")
//	public String Login(@RequestParam("Username") String Username,@RequestParam("Password") String password, @RequestParam("Role") int role)
//	{
//		return Userser.Login(Username,password,role);
//	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users login) {
        boolean isValid = Userser.validateLogin(login.getUsername(), login.getPassword());
        if (isValid) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password.");
        }
    }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @PostMapping("/newUser")
	   	public ResponseEntity<String> new_user(@RequestBody Users ur )
	   	{
		   return Userser.registerUser(ur);   
	   	}
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @PutMapping("/forgotpassword")
	 public ResponseEntity<String> forgot_Password(@RequestBody Forgot_Password fr )
		   	{
			   return Userser.forgot_Password(fr.getUsername(),fr.getMobileno(),fr.getEmail(),fr.getPassword() );   
		   	}
	 
	
}
