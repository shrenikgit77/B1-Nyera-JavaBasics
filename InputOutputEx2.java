/* WAP to read your name, age, weight, height */

//lang package gets auto import

import java.util.Scanner;

class InputOutputEx2
{
	public static void main(String []args)
	{
		String name;
		int age;
		float weight, height;

		Scanner scan = new Scanner(System.in);

		name = scan.next();
		age = scan.nextInt();
		weight = scan.nextFloat();
		height = scan.nextFloat();

	}
}


/*
	Scanner class has following methods
	1) next()			: read text/string
	2) nextFloat()		: read a float number
	3) nextInt()		: read integer
	4) nextDouble()		: read double datatype number

*/