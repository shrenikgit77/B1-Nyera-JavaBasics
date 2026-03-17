package com.shrenik.example;

public class Product {
	public int id;
	public String productTitle;
	public double cost;
	
	
	public Product() {}

	
	public Product(int id, String productTitle, double cost) {
		super();
		this.id = id;
		this.productTitle = productTitle;
		this.cost = cost;
	}


	@Override
	public String toString() {
		return "Product [id=" + id + ", productTitle=" + productTitle + ", cost=" + cost + "]";
	}
	
	
	
	
}
