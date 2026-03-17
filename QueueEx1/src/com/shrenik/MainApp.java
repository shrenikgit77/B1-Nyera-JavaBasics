package com.shrenik;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

import com.shrenik.example.Customer;

public class MainApp {

	public static void main(String[] args) {
		Queue <Integer>numbers = new LinkedList<Integer>();
		
		numbers.add(10);
		numbers.add(20);
		numbers.add(30);
		numbers.add(40);
		numbers.add(50);
		
		numbers.remove();
		numbers.remove();
		
		System.out.println(numbers);
		
		
		Deque <Customer>customers = new LinkedList<Customer>();
		
		customers.addFirst(new Customer(8383, "Smith", "INDIA"));
		customers.add(new Customer(5215, "James", "USA"));
		customers.addLast(new Customer(6552, "harry", "INDIA"));
		customers.add(new Customer(6352, "John", "USA"));
		customers.offer(new Customer(5324, "Eliz", "INDIA"));
		
		//james <-harry <- John
		customers.removeLast();
		customers.removeFirst();
		
		System.out.println(customers);
		

	}

}

