package com.Safar.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Safar.Entity.Trips_Package;
import com.Safar.Repository.Trips_Package_Repository;
import com.Safar.Service.Trips_Package_Service;
import com.Safar.Service.UsersService;

@RestController
public class Trips_Pacakage_Controller {
	
	@Autowired
	Trips_Package_Service Tpservice;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/trips")
	public ResponseEntity<List<Trips_Package>> getAll()
	{
		return ResponseEntity.ok(Tpservice.getPackages());
	}

}
