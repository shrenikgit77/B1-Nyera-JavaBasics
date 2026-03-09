package com.shrenik;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

import com.shrenik.example.Employee;

public class MainApp {

	public static void main(String[] args) {
		Employee e1 = new Employee(942, "Smith", 89000.00f);
		Employee e2 = new Employee(942, "Andora", 90000.00f);
		Employee e3 = new Employee(942, "Shrenik", 90000.00f);

		Set <Employee>employees = new TreeSet<Employee>();
		
		employees.add(e1);
		employees.add(e2);
		employees.add(e3);
		employees.add(e1);
		
		for(Employee item:employees)
		{
			System.out.println(item);
		}
		
	}

}
