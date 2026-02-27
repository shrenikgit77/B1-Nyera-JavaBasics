package com.shrenik;

import com.shrenik.example.Bmw;
import com.shrenik.example.Car;
import com.shrenik.example.Ford;

public class MainApp {

	public static void main(String[] args) {
		Car car;
		
	
		
		car = new Bmw();
		car.move();
		
		car = new Ford();
		car.move();

	}

}


/*
 Rules
 1) can not create object of abstract class
 2) abstract class only been initialized by child classes
 3) abstract class may have abstract + non-abstract methods 
 */ 
