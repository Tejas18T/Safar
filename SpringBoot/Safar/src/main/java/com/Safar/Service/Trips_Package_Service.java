package com.Safar.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Safar.Entity.Trips_Package;
import com.Safar.Repository.Trips_Package_Repository;

@Service
public class Trips_Package_Service {
	
	@Autowired
	Trips_Package_Repository TPRepo;
	
	public List<Trips_Package> getPackages()
	{
		return TPRepo.findAll();
	}

}
