package com.shrenik.example;

public class MainApp {

	public static void main(String[] args) {

		function1();

		Runnable r = () -> {
			System.out.println("This is Test Functional Program");
		};
		
		Thread t = new Thread(r);
		t.start();
	}

	
	private static void function1() {
		Runnable r = new Runnable() {

			@Override
			public void run() {
				System.out.println("This is Test Functional Program");

			}

		};

		Thread t = new Thread(r);
		t.start();
	}

}
