package com.Safar.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Safar.Entity.Role;
import com.Safar.Repository.Role_Repository;

@Service
public class RoleService {
	
	@Autowired
	Role_Repository Role_Repo;
	
	}
