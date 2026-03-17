package com.shrenik.example;

public class Employee implements Comparable<Employee>{
	public int empCode;
	public String empName;
	public double salary;
	
	public Employee() {}
	
	public Employee(int empCode, String empName, double salary) {
		super();
		this.empCode = empCode;
		this.empName = empName;
		this.salary = salary;
	}

	@Override
	public String toString() {
		return "Employee [empCode=" + empCode + ", empName=" + empName + ", salary=" + salary + "]";
	}

	@Override
	public int hashCode() {
//		System.out.println("hashCode of " + empName + " = " + empName.hashCode());
		return empName.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		Employee another = (Employee)obj;
		if(this.empCode==another.empCode && this.empName.equals(another.empName) && this.salary==another.salary)
			return true;
		else
			return false;
	}

	@Override
	public int compareTo(Employee o) {
		return this.empName.compareTo(o.empName);
	}
	
	
	
}
