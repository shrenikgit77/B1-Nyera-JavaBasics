package com.shrenik;

import java.util.InputMismatchException;
import java.util.Scanner;

public class MainApp {

	public static void main(String[] args) {
		int no, d;
		Scanner scan = new Scanner(System.in);
		
		try
		{
			System.out.print("\n Enter number = ");
			no = scan.nextInt();
			
			System.out.print("\n Enter divisor = ");
			d = scan.nextInt();
			
			float ans = no/d;
			
			System.out.println("\n Division = " + ans);
		}
		catch(ArithmeticException ex)
		{
			System.out.println("Error : Number can not be devide by zero");
		}
		catch(InputMismatchException ex)
		{
			System.out.println("Error : Invalid integer input");
		}
		catch(Exception ex)
		{
			System.out.println("Unhandled Exception. Please try some time later");
		}
		finally
		{
			System.out.println("Good bye");
		}
		
		
		
		
		
		
		
		
		System.out.println("\n End of Main Function");
	}

}
;