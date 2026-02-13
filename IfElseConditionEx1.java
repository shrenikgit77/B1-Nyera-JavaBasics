/* WAP to input a number and check whether a number is positive,negative or zero */

import java.util.Scanner;

class IfElseConditionEx1
{
	public static void main(String []args)
	{
		Scanner scan = new Scanner(System.in);
		int no;

		System.out.print("\n Enter a number = ");
		no = scan.nextInt();//-65

		// greater than 0 is positive, less than zero is negative

		if(no>0)
		{
			System.out.println("Number is Positive");
		}

		else if(no<0)
		{
			System.out.println("Number is Negative");
		}

		else if(no==0)
		{
			System.out.println("Number is Zero");
		}

	}
}


/*
Q1) WAP to input two numbers. check which one is max
Q2) WAP to input a number and check whether it is even or odd
Q3) WAP to input a 3 digit number and check whether it is palindrome or not.
    a number and its reverse if same then it is called as Palindrome number.

*/