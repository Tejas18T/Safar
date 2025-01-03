package com.Safar.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.Safar.Entity.Company;
import com.Safar.Entity.DummyCompany;

import com.Safar.Entity.Users;
import com.Safar.Service.Company_Service;

@RestController
public class CompanyController {
	
	@Autowired
	Company_Service ComSer;
	
	@GetMapping("/getallCompnies")
	public List<Company> getAllRoles(){
		return ComSer.getallCompany();
	}
	   
	   @CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/newCompany")
	   	public ResponseEntity<String> new_Company(@RequestBody DummyCompany ducom )
	   	{
		   Company com=new Company();
	   	   com.setCompany_name(ducom.getCompany_name());
	   	   com.setCompany_reg_no(ducom.getCompanyreg_no());
	   	   Users ur=new Users();
	   	   ur.setUsername(ducom.getUsername());
	   	   ur.setPassword(ducom.getPassword());
	   	   ur.setContactno(ducom.getContactno());
	   	   ur.setEmail(ducom.getEmail());
	   	   ur.setAddress(ducom.getAddress());
	   	   com.setUser_id(ur);
	       return ComSer.registerCompnay(com); 
	   	}

}
