/* Class and Object with function inside a class */

import java.util.Scanner;

class Product
{
	int code;
	String title;
	double cost;

	void addProduct(int code, String title, double amount)
	{
		//class-attribute = function-argument
		this.code = code;
		this.title = title;
		this.cost = amount;
	}

	void showProduct()
	{
		System.out.println(code + "\t" + title + "\t" + cost);
	}

	@Override
	public String toString()
	{
		return code + "\t" + title + "\t" + cost;
	}
}

class ClassAndObjectEx4
{
	public static void main(String []args)
	{
		Product p1 = new Product();
		p1.addProduct(8091, "Mouse", 8000.00);

		Product p2 = new Product();
		p2.addProduct(1341, "Keyboard", 15000.00);

		Product p3 = new Product();
		p3.addProduct(2011, "Speaker", 14000.00);

		p1.showProduct();
		p2.showProduct();
		p3.showProduct();

		//No special call required to invoke toString method.
		System.out.println(p1);
		System.out.println(p2);
		System.out.println(p3);
	}
}