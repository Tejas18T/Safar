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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="package")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Trips_Package {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer packageid;
	
	@Column(name="package_name")
	private String package_name;
	
	
	
	@Column(name="description",columnDefinition = "TEXT")
	private String description;
	
	@Column(name="source")
	private String source;
	
	@Column(name="destination")
	private String destination;
	
	@Column(name="tourist_alllwed")
	private  Integer tourist_allowed;
	
	@Column(name="person_per_package")
	private Float person_per_package;
	
	@Column(name="image_desc")
	private String image_desc;
	
	@JsonIgnoreProperties("trips")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="company_id")
	Company company_id;
	
	@JsonIgnoreProperties("packageid")
	@OneToMany(mappedBy = "packageid", cascade = CascadeType.ALL)
	List<Feedback> feedback;
	
	@JsonIgnoreProperties("packageid")
	@OneToMany(mappedBy = "packageid", cascade = CascadeType.ALL)
	List<Tours> trours;
	
}
