package com.Safar.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Safar.Entity.Users;


@Repository
public interface User_Repository extends JpaRepository<Users, Integer>{

	
   @Query("SELECT count(*) from Users where username =:username and password=:pwd and accountstatus=1")
   public int findByUsernameAndPassword(String username,String pwd);
   
   @Query("SELECT count(*) from Users where username =:username")
   public int findByUsername(String username);
   
   @Query("SELECT count(*) from Users where username =:username and email=:email and contactno=:contact and accountstatus=1")
   public int findByEmail(String username,String email,String contact);
	
    @Modifying
	@Query("update Users set password=:pwd where username =:username")
	public int updatepassword(String username,String pwd);

    @Query("SELECT count(*) from Users where contactno =:contactno")
	public int findByContact(String contactno);
	 	

}
