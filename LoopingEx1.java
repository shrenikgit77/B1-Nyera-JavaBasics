/* WAP to list numbers between m to n */

import java.util.Scanner;

class LoopingEx1
{
	public static void main(String []args)
	{
		Scanner scan = new Scanner(System.in);
		int m , n;

		System.out.print("\n Enter value of m = ");
		m = scan.nextInt(); //10    65      204

		System.out.print("\n Enter value of n = ");
		n = scan.nextInt();//50     100     350

		while(m<=n)
		{
			System.out.print(m + "\t");
			m++;
		}


		//Q. When to use while loop and when to use for loop
		//while loop = unknown number of repeatations
		//for loop = known number of repeatations
	}
}