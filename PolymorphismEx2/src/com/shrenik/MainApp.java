package com.shrenik;

import com.shrenik.example.Bmw;
import com.shrenik.example.Car;
import com.shrenik.example.Ford;

public class MainApp {

	public static void main(String[] args) {
		Car car;
		
		car = new Car();
		car.move();
		
		car = new Bmw();
		car.move();
		
		car = new Ford();
		car.move();

	}

}
