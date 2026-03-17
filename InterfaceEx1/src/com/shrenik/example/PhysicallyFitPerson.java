package com.shrenik.example;

public class PhysicallyFitPerson extends Person implements Speaking, Walking{

	@Override
	public void walk() {
		System.out.println("Person is speaking without breaking.");
	}

	@Override
	public void speak() {
		System.out.println("Person is walking without any issues");
	}

}
