	package com.Safar.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Company")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer company_id;
	
	@Column(name="company_name")
	private String company_name;
	
	@Column(name="company_reg_no")
	private String company_reg_no;
	
	@JsonIgnoreProperties("com")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	Users user_id ;
	
	@JsonIgnoreProperties("company_id")
	@OneToMany(mappedBy = "company_id", cascade = CascadeType.ALL)
	List<Trips_Package> trips;
}

