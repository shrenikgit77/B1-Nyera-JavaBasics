/* WAP to input two numbers and calculate addition, subtraction, multiplication, division and find remainder */

import java.util.Scanner;

class CalculatorApp
{
		public static void main(String []args)
		{
			Scanner scan = new Scanner(System.in);
			int a, b;

			System.out.print("\n Enter value of a = ");
			a = scan.nextInt(); //5

			System.out.print("\n Enter value of b = ");
			b = scan.nextInt();//2

			int addn = a + b;
			System.out.print("\n Addition = " + addn);

			int subt = a - b;
			System.out.print("\n Subtraction = " + subt);

			int mult = a * b;
			System.out.print("\n Multiplication = " + mult);

			int idiv = a / b;
			System.out.print("\n Integer Division = " + idiv);  //2

			float fdiv = (float)a / b;
			System.out.print("\n Float Division = " + fdiv); //2.5

			int rem = a % b;
			System.out.print("\n Remainder = " + rem);//3

			System.out.println(a + "" + 10); //output = 510
			System.out.println("" + a + 10); //output = 510
			System.out.println("" + (a + 10)); //output = 15
			System.out.println(("") + a + 10); //output = 510

		}
}


/*
	Note
	1) integer/integer will result output in "integer"
	2) float/integer or integer/float or float/float will result output in "float"
*/