package com.Safar.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Safar.Entity.Feedback;
import com.Safar.Repository.FeedbackRepository;


@Service
public class FeedBackService {

	@Autowired
	FeedbackRepository FRepo;
	
	public List<Feedback> getAllfeedback(){
		return FRepo.findAll();
	}
}
