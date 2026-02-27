package com.shrenik.example;

public class Ford extends Car{
	
	
	@Override
	public void move() {
		System.out.println("Ford implemented move");
	}

	public void race()
	{
		System.out.println("Ford moving forward");
	}
	
	public void stop()
	{
		System.out.println("Ford stopped");
	}
}
