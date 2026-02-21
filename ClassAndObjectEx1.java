/* Class and Object */


class Product
{
	int code;
	String title;
	double cost;
}

class ClassAndObjectEx1
{
	public static void main(String []args)
	{
		Product p1 = new Product();
		p1.code = 2495;
		p1.title = "Mouse";
		p1.cost = 8900.00;

		System.out.println("Product1 = " + p1.code + "\t" + p1.title + "\t" + p1.cost);

		//unreferenced object : garbage collector will destroy such object
		new Product();

	}
}