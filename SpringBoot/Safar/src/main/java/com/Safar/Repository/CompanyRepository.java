package com.Safar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Safar.Entity.Company;


@Repository
public interface CompanyRepository extends JpaRepository< Company, Integer> {

}
