package com.Safar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Safar.Entity.Role;

@Repository
public interface Role_Repository extends JpaRepository <Role, Integer> {

}
