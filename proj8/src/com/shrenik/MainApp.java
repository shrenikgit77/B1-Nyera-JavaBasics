package com.shrenik;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.shrenik.example.Employee;
import com.shrenik.example.EmployeeSearchInterface;

public class MainApp {

	public static void main(String[] args) {
		Map <Integer, Employee> empRecords = new LinkedHashMap();
		
		empRecords.put(1883, new Employee("Raj",9000.00));
		empRecords.put(1884, new Employee("Aditya", 13000.00));
		empRecords.put(1885, new Employee("Prutvi", 17000.00));
		
		System.out.println("Using keySet() Method, ");
		Set allkeys = empRecords.keySet();
		for(Object key:allkeys)
		{
			System.out.println(key + " ===> " + empRecords.get(key));
		}
		
		System.out.println("Using EntrySet(),");
		Set <Entry<Integer, Employee>> empSet = empRecords.entrySet();
		
		for(Entry<Integer, Employee> rec:empSet)
		{
			System.out.println(rec.getKey() + " ===> " +rec.getValue());
		}
		
		EmployeeSearchInterface es = (Map <Integer, Employee> eRecords, String user_empname) -> {
			Set <Entry<Integer, Employee>> entries = empRecords.entrySet();
			
			for(Entry<Integer, Employee> rec:empSet)
			{
				if(user_empname.equals(rec.getValue().getName()))
					return rec.getValue();
			}
			
			return null;
		};
		
		
		Employee foundEmp = es.searchByName(empRecords, "Raj");
		
		if(foundEmp==null)
			System.out.println("Employee not Found");
		else
			System.out.println("Record Found = " + foundEmp);
		
		
		//Here implement EmployeeList Interface using Lambda Expression to print Employee List matching min. salary of Rs.11000
		empRecords.values().stream().filter(emp->emp.getName().equals("Raj")).findAny();
		
		
	}

}
