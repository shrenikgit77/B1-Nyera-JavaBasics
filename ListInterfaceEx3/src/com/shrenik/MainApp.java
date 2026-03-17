package com.shrenik;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.shrenik.example.Product;

public class MainApp {

	public static void main(String[] args) {
		//1. create primitive values collection in list.
		
		List <Integer>numbers = new <Integer>ArrayList(Arrays.asList(10,48,5,81,11));
		
		System.out.println(numbers);
		
		//Collections is a "class" and Collection is "interface" 
		
		Collections.sort(numbers);
		System.out.println(numbers);
		
		Collections.reverse(numbers);
		System.out.println(numbers);
		
		Collections.shuffle(numbers);
		System.out.println(numbers);
		
		int index1 = Collections.binarySearch(numbers, 81);
		System.out.println("search 81 = " + index1);
		
		int index2 = Collections.binarySearch(numbers, 100);
		System.out.println("search 81 = " + index2);
		
		List <String>users = new ArrayList(Arrays.asList("Sachin", "Yuvraj", "Smith", "Puneeth"));
		Collections.swap(users, 0, 1);
		
		System.out.println(users);
		
		
		//1. create non-primitive values collection in list.
		
		List<Product> products = new <Product>ArrayList(Arrays.asList(
					new Product(1401, "Mouse", 1900.00),
					new Product(2984, "Keyboard", 1700.00),
					new Product(8415, "Speaker", 15000.00),
					new Product(1941, "Bluetooth", 400.00),
					new Product(9014, "Processor", 5000.00)
				));
		
		Collections.sort(products);
		
		for(Product item:products)
		{
			System.out.println(item);
		}
	}

}
