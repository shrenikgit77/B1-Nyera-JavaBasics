/* Class Object: Read input and store them in class attributes */

import java.util.Scanner;

class Product
{
	int code;
	String title;
	double cost;
}

class ClassAndObjectEx2
{
	public static void main(String []args)
	{
		Scanner scan = new Scanner(System.in);

		Product p1 = new Product();

		System.out.print("\n Enter product code = ");
		p1.code = scan.nextInt();

		System.out.print("\n Enter product title = ");
		p1.title = scan.next();

		System.out.print("\n Enter cost = ");
		p1.cost = scan.nextDouble();




		Product p2 = new Product();

		System.out.print("\n Enter product code = ");
		p2.code = scan.nextInt();

		System.out.print("\n Enter product title = ");
		p2.title = scan.next();

		System.out.print("\n Enter cost = ");
		p2.cost = scan.nextDouble();
	}
}