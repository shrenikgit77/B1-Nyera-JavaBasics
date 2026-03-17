package com.shrenik.example;

public class Product {
	private int id;
	private String title;
	private double cost;
	
	
	//Shortcut : Alt + Shift + S -> O 
	
	public Product() {}
	
	public Product(int id, String title, double cost) {
		super();
		this.id = id;
		this.title = title;
		this.cost = cost;
	}
	
	
	//Alt + Shift + S -> S

	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", cost=" + cost + "]";
	}

	//Alt + Shift + S -> R
	
	public int getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public double getCost() {
		return cost;
	}
	
	
	
	
	
	
}
