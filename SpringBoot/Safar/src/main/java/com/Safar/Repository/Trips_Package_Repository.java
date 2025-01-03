package com.Safar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Safar.Entity.Trips_Package;

@Repository
public interface Trips_Package_Repository extends JpaRepository< Trips_Package, Integer> {

}
