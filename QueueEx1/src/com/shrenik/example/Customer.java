package com.shrenik.example;

public class Customer {
	public int id;
	public String customerName;
	public String location;
	
	
	public Customer() {
		
	}
	
	public Customer(int id, String customerName, String location) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.location = location;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", customerName=" + customerName + ", location=" + location + "]";
	}
	
	
	
}
