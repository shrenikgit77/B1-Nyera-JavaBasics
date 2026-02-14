/* Switch Case */

import java.util.Scanner;

enum Continent {
	ASIA,
	AFRICA,
	EUROPE
}

class SwitchCaseEx3
{
	public static void main(String []args)throws InterruptedException
	{
			//asia [Taj Mahal, Burj Khalifa, Cu chi Tunnel],
			//europe [Eiffel Tower, Colosseum, Vatican Museum],
			//africa [Victoria Falls]

			String option;
			Scanner scan = new Scanner(System.in);

			System.out.println("Which continent do you like to travel [Asia, Europe, Africa] :");

			System.out.print("\n Continent:");
			option = scan.next().toUpperCase();

			Continent selected = Continent.valueOf(option);

			System.out.println("Recommendation app is searching best places for you...");
			Thread.sleep(5000);	//5 seconds delay

			switch(selected) //int,single-character,constant
			{
				case ASIA:
					System.out.println("you can visit Taj Mahal, Burj Khalifa, Cu chi Tunnel");
					break;
				case EUROPE:
					System.out.println("you can visit Eiffel Tower, Colosseum, Vatican Museum");
					break;
				case AFRICA:
					System.out.println("you can visit Victoria Falls");
					break;
				default:
					System.out.println("Invalid option selected");
			}


	}
}

/* Pizza App
   Problem Statement: Create a Java Application that simulates Pizza ordering system using
   switch case, enum and interactive menus
   1) Menus : show list of pizza (Margharita, Pepperoni), show available size(SMALL, MEDIUM, LARGE),
   		      show extra toppings (Cheese Burst, Olives, Jalapenos, Mushrooms)

   2) User Input: Let user choose pizza type, size and toppings
   3) Price Calculation: Assign base price for each pizza type, size. Show the extra cost for toppings
      and final bill

*/

/*
Interview Questions
1) When do think to check conditions using if else, else if ladder vs switch case?
2) What is exception? how java handles exception. give examples to explain exception and types
3) Explain when to use enumeration?


*/



