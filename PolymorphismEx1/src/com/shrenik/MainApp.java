package com.shrenik;

import com.shrenik.example.Animal;
import com.shrenik.example.Bird;
import com.shrenik.example.Dog;
import com.shrenik.example.Fish;

public class MainApp {

	public static void main(String[] args) {
		//parent class object
		Animal a;
		
		//child class initialize object
		a = new Fish();
		a.move();
		
		a = new Bird();
		a.move();
		
		a = new Dog();
		a.move();
		
		

	}

}
