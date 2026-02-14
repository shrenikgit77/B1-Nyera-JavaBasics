/* Switch Case */

import java.util.Scanner;

enum Continent {
	ASIA,
	AFRICA,
	EUROPE
}

class SwitchCaseEx2
{
	public static void main(String []args)throws InterruptedException
	{
			//asia [Taj Mahal, Burj Khalifa, Cu chi Tunnel],
			//europe [Eiffel Tower, Colosseum, Vatican Museum],
			//africa [Victoria Falls]

			int option;
			Scanner scan = new Scanner(System.in);

			System.out.println("1. Asia");
			System.out.println("2. Europe");
			System.out.println("3. Africa");

			System.out.print("\n Select Option:");
			option = scan.nextInt();

			Continent selected = option==1?Continent.ASIA:
									option==2?Continent.EUROPE:
									option==3?Continent.AFRICA:null;


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