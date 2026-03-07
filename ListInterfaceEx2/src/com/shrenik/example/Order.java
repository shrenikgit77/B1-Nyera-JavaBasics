package com.shrenik.example;

public class Order {
	public int id;
	public String date;
	public String customerName;
	public int quantities;
	public double amount;
	
	
	public Order() {}
	
	public Order(int id, String date, String customerName, int quantities, double amount) {
		super();
		this.id = id;
		this.date = date;
		this.customerName = customerName;
		this.quantities = quantities;
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", date=" + date + ", customerName=" + customerName + ", quantities=" + quantities
				+ ", amount=" + amount + "]";
	}
	
	
	
	
}
