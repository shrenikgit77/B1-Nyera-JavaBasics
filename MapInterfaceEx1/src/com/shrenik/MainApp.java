package com.shrenik;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MainApp {

	public static void main(String[] args) {
		Map<Integer, String> students = new HashMap<Integer, String>();
		
		students.put(393, "Kavya");
		students.put(415, "Manish");
		students.put(841, "Nitin");
		students.put(393, "Vivek");
		
		System.out.println("size of map = " + students.size());
		System.out.println(students);
		
		//fetch only keys
		Set <Integer> allkeys = students.keySet();
		
		//fetch only values
		Collection <String> allvalues = students.values();
		
		System.out.println(allkeys);
		System.out.println(allvalues);
		

	}

}
