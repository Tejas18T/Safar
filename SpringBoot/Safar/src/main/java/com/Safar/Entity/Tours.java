package com.Safar.Entity;

import java.util.Date;
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
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="tours")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Tours {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer tour_id;
	
	@Column(name="start_date")
	private Date start_date;
	
	@Column(name="end_date")
	private Date end_date;
	
	@Column(name="tour_status")
	private String tour_status;
	
	@JsonIgnoreProperties("trous")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="packageid")
	Trips_Package packageid;
}
