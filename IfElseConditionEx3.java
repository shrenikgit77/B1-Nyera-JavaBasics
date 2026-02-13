/* WAP to input policy amount, gender, age, health status, place and validate conditions to calcualte
   how much premium to be paid as per the criteria of a insurance

   crieteria1
   -> if person is male, age is between 25 to 65, place is city, health status is Excellent and
      policy amount is more than 6 lacs then premium amount will be Rs.4 per thousand.

   crieteria2
   -> if person is female, age is between 25 to 65, place is city, health status is Excellent and
      policy amount is more than 3 lacs then premium amount will be Rs.2 per thousand.

   crieteria3
   -> if person is male, age is between 25 to 65, place is village, health status is Poor and
      policy amount is more than 50 thousand then premium amount will be 2% of policy amount

   in other cases person is not eligible for insurance */

import java.util.Scanner;

class IfElseConditionEx3
{

	public static void main(String []args)
	{
		Scanner scan = new Scanner(System.in);

		String gender, place, health;
		int age, policyamt, premium;

		System.out.print("\n Enter Gender = ");
		gender = scan.next();

		System.out.print("\n Enter age = ");
		age = scan.nextInt();

		System.out.print("\n Enter health status = ");
		health = scan.next();

		System.out.print("\n Enter policy amount = ");
		policyamt = scan.nextInt();

		System.out.print("\n Enter place = ");
		place = scan.next();

		if(gender.equals("male")==true && age>=25 && age<=65 && place.equals("city")==true
			&& health.equals("excellent")==true && policyamt>=600000)
			{
				premium = policyamt*4/1000;
				System.out.println("Premium will be Rs.4 per thousand = Rs." + premium);
			}
		else if(gender.equals("female")==true && age>=25 && age<=65 && place.equals("city")==true
			&& health.equals("excellent")==true && policyamt>=300000)
			{
				premium = policyamt*2/1000;
				System.out.println("Premium will be Rs.2 per thousand = Rs." + premium);
			}
		else if(gender.equals("male")==true && age>=25 && age<=65 && place.equals("village")==true
			&& health.equals("poor")==true && policyamt>=50000)
			{
				premium = policyamt*2/100;
				System.out.println("Premium will be 2 percent = Rs." + premium);
			}
		else
			{
				System.out.println("Person is not eligible for insurance");
			}

	}



}