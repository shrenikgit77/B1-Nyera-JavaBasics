package com.shrenik.example;

public class Product implements Comparable<Product>{
	public int id;
	public String title;
	public double cost;
	
	public Product() {}
	
	
	public Product(int id, String title, double cost) {
		super();
		this.id = id;
		this.title = title;
		this.cost = cost;
	}


	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", cost=" + cost + "]";
	}


	@Override
	public int compareTo(Product o) {
		if(this.id>o.id)
			return +1;
		else if(this.id<o.id)
			return -1;
		else
			return 0;
	}
	
	
	
	
	
	
}
