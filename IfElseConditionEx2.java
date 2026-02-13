/* WAP to input password and confirm password from user. If user enter both same then show message
   "Success" otherwise show message "Failed" */

import java.util.Scanner;

class IfElseConditionEx2
{
	public static void main(String []args)
	{
		Scanner scan = new Scanner(System.in);

		String pwd, confirm;

		System.out.print("\n Enter password :");
		pwd = scan.next();

		System.out.print("\n Enter confirm password :");
		confirm = scan.next();

		//pwd==confirm wont work as java compares memory address of string variables using ==
		//equals() function results true/false and second is compareTo() function results integer

		if(pwd.equals(confirm)==true)
		{
			System.out.println("Success");
		}
		else
		{
			System.out.println("Failed");
		}

		if(pwd.compareTo(confirm)==0)
		{
				System.out.println("Success");
		}
		else
		{
				System.out.println("Failed");
		}
	}
}







