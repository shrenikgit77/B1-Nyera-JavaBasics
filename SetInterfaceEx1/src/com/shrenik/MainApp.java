package com.shrenik;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class MainApp {

	public static void main(String[] args) {
		//1) Set is interface and not allow duplicates
		//2) HashSet not guaranty order of elements
		Set <Integer>numbers = new HashSet<Integer>();
		
		numbers.add(39);
		numbers.add(28);
		numbers.add(100);
		numbers.add(28);
		numbers.add(110);
		
		System.out.println(numbers);
		
		//LinkedHashSet ensures the insertion order
		Set <Integer>evens = new LinkedHashSet<Integer>();
		evens.add(56);
		evens.add(98);
		evens.add(100);
		evens.add(18);
		evens.add(100);
		
		System.out.println(evens);
		
		//TreeSet organize items in  ascending order
		Set<Integer>odds = new TreeSet<Integer>();
		odds.add(15);
		odds.add(52);
		odds.add(10);
		odds.add(11);
		odds.add(15);
		
		System.out.println(odds);
		
		
		
		
	}

}
