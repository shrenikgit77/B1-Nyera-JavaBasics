package com.shrenik;

import com.shrenik.example.Calculator;

public class MainApp {

	public static void main(String[] args) {
		Calculator c1 = new Calculator();
		
		c1.addition(19,  34);
		
		float x[] = {1.5f, 9.4f, 1.2f};
		float y[] = {2.5f, 4.4f, 1.2f};
		
		c1.addition(x, y);
		
		c1.addition("Hello", "World");

	}

}
