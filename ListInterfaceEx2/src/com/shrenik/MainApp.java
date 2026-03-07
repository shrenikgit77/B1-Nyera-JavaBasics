package com.shrenik;

import java.util.ArrayList;
import java.util.List;

import com.shrenik.example.Order;

public class MainApp {

	public static void main(String[] args) {
		// allow append only integer values
		List<Integer> numbers = new ArrayList<Integer>();

		numbers.add(81);
		numbers.add(89);
		numbers.add(93);
		numbers.add(100);
		numbers.add(82);

		System.out.println(numbers);

		int addition = numbers.get(0) + numbers.get(2);
		System.out.println(addition);
		
		//Generic list
		List<Order> orders = new ArrayList<Order>();
		
		orders.add(new Order());
		orders.add(new Order(284, "06-Mar-2026", "smith", 19, 180000));
		
		System.out.println(orders);
		
		
		
	}
}
