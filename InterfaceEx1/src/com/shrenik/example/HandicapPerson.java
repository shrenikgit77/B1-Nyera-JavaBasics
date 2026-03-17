package com.shrenik.example;

public class HandicapPerson extends Person implements Speaking, Walking{

	@Override
	public void walk() {
		System.out.println("Person speaks with a break");
	}

	@Override
	public void speak() {
		System.out.println("Person walking with a stick");
	}
	
}
