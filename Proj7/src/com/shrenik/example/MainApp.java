package com.shrenik.example;

import java.util.Arrays;
import java.util.List;

public class MainApp {

	public static void main(String[] args) {
		
		List <Integer> numbersList = Arrays.asList(5,9,15,2,20,4);
		
		System.out.println(numbersList.stream());
	}
}


