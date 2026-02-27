package com.shrenik.example;

import java.util.Arrays;

public class Cart extends Product{
	
	protected Product []products;
	protected int qty[];
	
	
	public Cart() {}
	
	public Cart(Product[] products, int[] qty) {
		super();
		this.products = products;
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "Cart [products=" + Arrays.toString(products) + ", qty=" + Arrays.toString(qty) + "]";
	}
	
}
