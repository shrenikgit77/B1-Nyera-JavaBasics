package com.shrenik;

import com.shrenik.example.Cart;
import com.shrenik.example.Product;

public class MainApp {

	public static void main(String[] args) {
		
		//Shortcut to import any class : Ctrl + Shift + O
		
		Product products[]  = {
				new Product(914, "Mouse", 800.00),
				new Product(901, "Keboard", 1600.00)
		};
		
		int quantities[] = {2,8};

		//reference argument?
		Cart c1 = new Cart(products, quantities);
		System.out.println(c1);
		
		
		//TODO: Calculate and print total bill amount. 
		
		
		
		int x[]= {19};
		
		count(x);
		System.out.println(x);
	}
	
	
	public static void count(int p[]) /* value of x copies to variable p */
	{
		p[0]++;
	}

}


/* Assignment: WAP to input any number in main() function. Define a function reverse() that reverse the number */










