/* Class and Object with function inside a class */

import java.util.Scanner;

class Product
{
	int code;
	String title;
	double cost;
	Scanner scan = new Scanner(System.in);

	void addProduct()
	{
		System.out.print("\n Enter code = ");
		code = scan.nextInt();

		System.out.print("\n Enter title = ");
		title = scan.next();

		System.out.print("\n Enter cost = ");
		cost = scan.nextDouble();
	}
}

class ClassAndObjectEx3
{
	public static void main(String []args)
	{
		Product p1 = new Product();
		p1.addProduct();

		Product p2 = new Product();
		p2.addProduct();

		Product p3 = new Product();
		p3.addProduct();
	}
}