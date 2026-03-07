package com.shrenik;

import java.util.ArrayList;
import java.util.List;


public class MainApp {

	public static void main(String[] args) {
		List numbers = new ArrayList();

		numbers.add(19);
		numbers.add(93);
		numbers.add(19);
		numbers.add(100);
		numbers.add(74);

		System.out.println(numbers);

		for (int i = 0; i < numbers.size(); i++) {
			System.out.println(numbers.get(i));
		}

		for (Object item : numbers) {
			{
				System.out.println(item);
			}
		}
		
		//Object object has no state. neither int, float or any non-primitive type. 
		//Object is holding a value without its original type
	
		
	}
	
}
